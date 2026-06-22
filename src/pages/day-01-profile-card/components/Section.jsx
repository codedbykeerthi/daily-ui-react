import React from 'react'

const Section = ({ title, children }) => {
  return (
    <div className="space-y-2">
       <p className="text-gray-400">{title}</p>
       {children}
    </div>
  )
}

export default Section
