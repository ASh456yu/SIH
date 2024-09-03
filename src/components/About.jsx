import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";


function About() {
    return (
        <div className='flex items-center justify-center min-h-screen container mx-auto'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {/* Card */}
                <div className="card">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Vedansh Mangal</h5>
                        <p className='text-slate-500 text-lg mt-3'>Monk.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Chayandeep Roy</h5>
                        <p className='text-slate-500 text-lg mt-3'>Good Boy.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Parth</h5>
                        <p className='text-slate-500 text-lg mt-3'>Playboy.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Shreyash Bhau</h5>
                        <p className='text-slate-500 text-lg mt-3'>Multitalented.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Aditi</h5>
                        <p className='text-slate-500 text-lg mt-3'>EEE-B Topper.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

                <div className="card ">
                    <div className='p-5 flex flex-col'>
                        <div className="rounded-xl overflow-hidden">
                            <img className='max-h-40' src="/images/sun jung woo.jpg" alt="" />
                        </div>
                        <h5 className='text-2xl md:text-3xl font-medium mt-3'>Nikhil</h5>
                        <p className='text-slate-500 text-lg mt-3'>EEE-A Topper.</p>
                        <div className='flex'>
                            <a href="#"><CiLinkedin className='w-5 h-5' /></a>
                            <a href="#"><CiFacebook className='w-5 h-5' /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
