import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-30 grid grid-cols-2'>
         <div className='w-full'></div>
        <div className='text-white text-md space-x-4 h-full flex items-end ' >

            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Protfolio</a>
            <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Nav