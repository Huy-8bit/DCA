import React from 'react'

const ButtonSecondary = ({text}:{text:string}) => {
  return (
    <div className='container-btn-secondary'>
        <button className='btn-secondary px-6 py-[10px] text-lg font-medium text-[#000] cursor-pointer'>
              {text}
        </button>
    </div>
  )
}

export default ButtonSecondary