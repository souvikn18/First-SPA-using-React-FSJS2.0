import React from 'react'
function Card({pp,name,role,message}) {
    return(
        <>
        <section className='h-[380px] w-[400px]'>
            <div className=' py-[50px] flex flex-col items-center gap-[20px] shadow-xl	rounded-lg'>
                    <img className='rounded-full h-[112px] w-[112px] ' src={pp} alt='...'/>
                    <h3 className='text-[#000f35] text-[20px] font-semibold'>{name}</h3>
                    <p className='text-[#454545] text-[14px] font-semibold'>{role}</p>
                    <p className='h-[65px] w-[300px] text-center overflow-hidden text-[#454545] text-[14px] font-semibold'>{message}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" data-supported-dps="34x34" width="25" height="25" focusable="false">
                        <g transform="scale(.7083)" fill="none" fill-rule="evenodd">
                        <rect class="bug-text-color" fill="#FFF" x="1" y="1" width="46" height="46" rx="4"></rect>
                        <path d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" class="background" fill="#0077B5"></path>
                        </g>
                    </svg>
                </div>
        </section>   
        </>
    )
}
export default Card