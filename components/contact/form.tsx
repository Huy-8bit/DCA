import React from 'react'

const FormContact = () => {
    return (
        <form className='form w-[382px] md:w-full lg:max-w-[647px] p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2 col-span-1'>
                <span className='text-base font-medium text-[#fff]'>Your Name</span>
                <input type='text' className='p-4 bg-[rgba(11,11,12,0.4)] border border-[#292929] backdrop-blur-[20px] rounded-lg text-[#fff] outline-none' />
            </div>
            <div className='flex flex-col gap-2 col-span-1'>
                <span className='text-base font-medium text-[#fff]'>Email</span>
                <input type='email' className='p-4 bg-[rgba(11,11,12,0.4)] border border-[#292929] backdrop-blur-[20px] rounded-lg text-[#fff] outline-none' />
            </div>
            <div className='flex flex-col gap-2 col-span-1 lg:col-span-2'>
                <span className='text-base font-medium text-[#fff]'>Phone</span>
                <input type='text' className='p-4 bg-[rgba(11,11,12,0.4)] border border-[#292929] backdrop-blur-[20px] rounded-lg text-[#fff] outline-none' />
            </div>
            <div className='flex flex-col gap-2 col-span-1 lg:col-span-2'>
                <span className='text-base font-medium text-[#fff]'>Message</span>
                <textarea className='p-4 bg-[rgba(11,11,12,0.4)] border border-[#292929] backdrop-blur-[20px] rounded-lg text-[#fff] outline-none' />
            </div>
            <button className='border border-[#292929] rounded-[100px] w-[167px] h-11 text-[#fff]'>
                Send message
            </button>
        </form>
    )
}

export default FormContact