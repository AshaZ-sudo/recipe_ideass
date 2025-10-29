import React from 'react'
import { motion } from 'framer-motion'

export default function RecipeCard({recipe}) {
  return (
    <motion.div layout whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow p-4">
      <img src={recipe.img} alt={recipe.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{recipe.name}</h3>
      <p className="text-sm mt-1">{recipe.desc}</p>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span>Match: {recipe.matchCount}/{recipe.ingredients.length} ({recipe.matchPct}%)</span>
        <span className="px-2 py-1 rounded bg-gray-100">{recipe.difficulty.toUpperCase()}</span>
      </div>
    </motion.div>
  )
}
