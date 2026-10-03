import React from 'react'

const layout = async ({children}:{children:React.ReactNode})=> {
  return (
       <div className='root-layout'>
      {children}
     </div>
  )
}

export default layout
