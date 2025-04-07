import React from 'react'

function Card() {
  return (
    <div>
       <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/30625361/pexels-photo-30625361/free-photo-of-peaceful-park-scene-with-sunlit-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <br/>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default Card
