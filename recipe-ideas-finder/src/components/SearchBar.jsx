import React from 'react'

export default function SearchBar({query, setQuery, onFind}) {
  return (
    <div className="flex gap-3 items-center mt-3">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter ingredients (comma separated) e.g. tomato, cheese, bread"
        className="flex-1 p-3 rounded-lg border"
      />
      <button onClick={onFind} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Find</button>
    </div>
  )
}
