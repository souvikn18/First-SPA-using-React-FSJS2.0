import React from 'react'
function Contact() {
    return(
        <>
            <h1 className='text-[45px] font-[600] text-center mt-8'>Contact us</h1>
            <form className='flex flex-col items-center gap-4 border-1 rounded-[4px] border-black border-solid my-8'>
                <input className='h-[30px] w-[200px] border rounded-[4px] pl-2 outline-none' type='text' placeholder='Full name'/>
                <input className='h-[30px] w-[200px] border rounded-[4px] pl-2 outline-none' type='text' placeholder='Mobile no.'/>
                <input className='h-[30px] w-[200px] border rounded-[4px] pl-2 outline-none' type='text' placeholder='Email id'/>
                <input className='h-[50px] w-[200px] border rounded-[4px] pl-2 outline-none' type='text' placeholder='Message'/>
                <button className='border-2 border-solid rounded-[50px] border-transparent text-white h-[50px] w-[120px] bg-[#3dcc00] font-[600] text-[19px] py-2 hover:bg-[#23d613] mt-4'>Submit</button>
            </form>
        </>
    )
}
export default Contact