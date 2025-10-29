import React from 'react'

export default function Filters({difficulty, setDifficulty, ageGroup, setAgeGroup}) {
  return (
    <div className="flex gap-3 mt-4 items-center">
      <select value={difficulty} onChange={e=>setDifficulty(e.target.value)} className="p-2 border rounded">
        <option value="all">All Levels</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select value={ageGroup} onChange={e=>setAgeGroup(e.target.value)} className="p-2 border rounded">
        <option value="all">All Ages</option>
        <option value="kids">Kids (below 13)</option>
        <option value="adults">Adults (20-35)</option>
        <option value="35-50">Adults (35-50)</option>
        <option value="50+">Seniors (50+)</option>
      </select>
    </div>
  )
}
