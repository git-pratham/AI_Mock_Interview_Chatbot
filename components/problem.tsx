import React from 'react'
import { problems } from '@/constants'
const problem = () => {
  return (
    <div>
       <div className="mb-20 h-full w-full flex flex-col items-center  justify-center text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Problem That I Identify In Real World</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 sm:p-8 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default problem
