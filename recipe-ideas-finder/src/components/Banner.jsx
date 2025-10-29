import React from 'react'
export default function Banner({ageGroup, mode}) {
  const banners = {
    kids: {
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop',
      text: 'Fun & Healthy Recipes for Kids!'
    },
    adults: {
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
      text: 'Quick & Tasty Recipes for Busy Adults'
    },
    '35-50': {
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop',
      text: 'Balanced & Nutritious Recipes'
    },
    '50+': {
      img: 'https://images.unsplash.com/photo-1481931098730-5692292f7a10?q=80&w=1400&auto=format&fit=crop',
      text: 'Light & Easy-to-Digest Meals'
    }
  }

  if (!ageGroup || ageGroup === 'all') return null
  const b = banners[ageGroup]
  const overlay = mode === 'creative' ? 'bg-gradient-to-r from-pink-500/40 to-yellow-400/30' : 'bg-white/30'
  return (
    <div className={`w-full rounded-lg overflow-hidden mt-4 ${mode==='creative' ? 'shadow-2xl' : 'shadow'}`}>
      <div className="relative">
        <img src={b.img} alt={b.text} className="w-full h-44 object-cover" />
        <div className={`absolute inset-0 flex items-center justify-center ${overlay}`}>
          <h2 className="text-white text-xl font-semibold drop-shadow">{b.text}</h2>
        </div>
      </div>
    </div>
  )
}
