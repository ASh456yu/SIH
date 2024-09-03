import React from 'react'


function HeaderTop() {
    
    return (
        <>
            <header className='bg-gradient-to-t from-[#e9b42e] to-[#0eef2c] border-20 shadow-2xl p-1'>
                <nav className='flex justify-between items-center w-[92%] mx-auto'>
                    <div className='flex'>
                        <img className='max-w-8 mx-1 rounded-full' src="/images/sun jung woo.jpg" alt="Logo" />
                        <div className='max-h-10 my-1 pt-1 cursor-pointer'>Here By Luck</div>
                    </div>
                    <div>
                        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                            <li>
                                <a className='hover:text-red-500 hover:text-base' href="/">Home</a>
                            </li>
                            <li>
                                <a className='hover:text-red-500' href="/about">About Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderTop
