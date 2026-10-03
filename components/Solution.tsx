import React from 'react'
import { solutions } from '@/constants'

const Solution = () => {
  return (
    <div>
              <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">Our solution</h2>
            <p className="text-center text-gray-300 mb-12 text-lg"></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 rounded-xl p-6 sm:p-8 border border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Solution
