import React from 'react'
export const Contact = () => {
  return (
    <>
            <div className="relative flex justify-center my-10   w-full" data-aos="fade-right" data-aos-duration="1000">
                <div
                    className="w-full max-w-md bg-gray-200 shadow-2xl backdrop-blur-lg p-8 rounded-lg text-center border border-white/10">
                    <h1 className="text-xl md:text-3xl font-bold my-4 text-[#dd0902]">Your details</h1>

                    <form id="orderForm" className="flex flex-col gap-5 text-left">
                        <div>
                            <div className="flex gap-1 my-1 text-black">
                                <label for="name" className="font-semibold text-lg">Name</label>
                                <span className="text-[#dd0902]">*</span>
                            </div>
                            <input type="text" id="name"
                                className="w-full p-2 rounded border border-black focus:outline-none " required/>
                        </div>
                        <div>
                            <div className="flex gap-1 my-1 text-black">
                                <label for="number" className="font-semibold text-lg">Phone Number</label>
                                <span className="text-[#dd0902]">*</span>
                            </div>
                            <input type="text" id="number"
                                className="w-full p-2 rounded border border-black focus:outline-none" required
                                pattern="\d{10}"/>
                        </div>
                        <div>
                            <div className="flex gap-1 my-1 text-black">
                                <label for="count" className="font-semibold text-lg">Count</label>
                                <span className="text-[#dd0902]">*</span>
                            </div>
                            <input type="number" id="count"
                                className="w-full p-2 rounded border border-black focus:outline-none" required min="1"/>
                        </div>
                        <div>
                            <div className="flex gap-1 my-1 text-black">
                                <label for="location" className="font-semibold text-lg">Location</label>
                                <span className="text-[#dd0902]">*</span>
                            </div>
                            <input type="text" id="location"
                                className="w-full p-2 rounded border border-black focus:outline-none" required/>
                        </div>
                        <div className="sm:col-span-2 flex justify-center">
                            <button
                                className="uppercase py-2 px-4 bg-[#dd0902] text-white font-medium mt-5 flex items-center gap-2 border-2 border-[#dd0902] hover:text-[#dd0902] hover:bg-transparent ">
                                submit order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
   
    </>
  )
}
