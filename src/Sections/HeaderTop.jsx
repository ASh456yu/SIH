import React from 'react'


function HeaderTop() {
    
    return (
        <>
            <header className='bg-gradient-to-t from-[#e9b42e] to-[#0eef2c] border-20 shadow-2xl p-1'>
                <nav className='flex justify-between items-center w-[92%] mx-auto'>
                    <div className='flex'>
                        <img className='max-w-8 mx-1 rounded-full' src="https://imgs.search.brave.com/ivCfy2jozPZq6CBB-OzY0g7kWzJBAypzNdYDgSwkO6s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/My8yNC8xMi81MC9o/dW1hbi0zMjU2NTY3/XzY0MC5qcGc" alt="Logo" />
                        <div className='max-h-10 my-1 pt-1 cursor-pointer'>Here By Luck</div>
                    </div>
                    <div>
                        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                            <li>
                                <a className='hover:text-red-500 hover:text-base' href="/SIH/">Home</a>
                            </li>
                            <li>
                                <a className='hover:text-red-500' href="/SIH/about">About Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderTop
