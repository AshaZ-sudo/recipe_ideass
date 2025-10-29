import React, {useState, useMemo} from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import RecipeCard from './components/RecipeCard'
import Banner from './components/Banner'
import { recipes as allRecipes } from './data/recipes'
import { MotionConfig, AnimatePresence, motion } from 'framer-motion'

export default function App(){
  const [mode, setMode] = useState('professional') // 'professional' or 'creative'
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('all')
  const [ageGroup, setAgeGroup] = useState('all')
  const [searched, setSearched] = useState(false)

  const toggleMode = ()=> setMode(m=> m==='professional' ? 'creative' : 'professional')

  const entered = useMemo(()=> {
    return query.toLowerCase().split(',').map(s=>s.trim()).filter(Boolean)
  },[query])

  function computeMatches(r){
    const matchCount = r.ingredients.filter(i => entered.includes(i)).length
    const matchPct = entered.length === 0 ? 0 : Math.round((matchCount / r.ingredients.length) * 100)
    return {...r, matchCount, matchPct}
  }

  const results = useMemo(()=> {
    return allRecipes
      .map(computeMatches)
      .filter(r => searched ? r.matchCount > 0 : true)
      .filter(r => difficulty === 'all' ? true : r.difficulty === difficulty)
      .filter(r => ageGroup === 'all' ? true : r.ageGroups.includes(ageGroup))
      .sort((a,b)=> b.matchCount - a.matchCount)
  },[query, difficulty, ageGroup, searched])

  function onFind(){
    setSearched(true)
  }

  const containerClass = mode === 'professional' ? 'bg-gray-50 text-gray-800' : 'bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 text-gray-900'

  return (
    <MotionConfig transition={{ duration: 0.25 }}>
      <div className={`${containerClass} min-h-screen pb-10`}>
        <Header mode={mode} toggleMode={toggleMode} />
        <main className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-medium">Hi there! Let's find the best recipes for you 🍲</h2>
            <p className="text-sm text-gray-500 mt-1">Select your age group, enter ingredients, and press <strong>Find</strong>.</p>
          </motion.div>

          <div className="mt-4">
            <SearchBar query={query} setQuery={setQuery} onFind={onFind} />
            <Filters difficulty={difficulty} setDifficulty={setDifficulty} ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
            <Banner ageGroup={ageGroup} mode={mode} />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {results.length === 0 ? (
                <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-center col-span-2">No matching recipes yet. Try entering ingredients and press Find.</motion.p>
              ) : results.map(r => (
                <motion.div key={r.id} layout initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} exit={{opacity:0}} >
                  <RecipeCard recipe={r} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </MotionConfig>
  )
}
