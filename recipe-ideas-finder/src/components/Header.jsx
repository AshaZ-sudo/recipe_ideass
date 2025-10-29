import React from 'react'

export default function Header({mode, toggleMode}) {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Recipe Ideas Finder</h1>
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded-md border transition-safe"
      >
        {mode === 'professional' ? 'Switch to Creative Mode' : 'Switch to Professional Mode'}
      </button>
    </header>
  )
}
