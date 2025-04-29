import React from 'react'
import img1 from '../assets/fb.webp'
import img2 from '../assets/Habout4.webp'
export const Home = () => {
  return (
    <div className="flex bg-white mx-5 sm:mx-10 md:mx-20 xl:mx-0 py-8 xl:py-0 rounded-lg ">
      <div className="relative hidden xl:block w-1/4">
        <img src={img1} alt="img" className="w-[700px] h-full" loading="lazy"/>
      </div>
      <div className="flex justify-center items-center flex-col px-8 w-full xl:w-1/2 my-5" data-aos="zoom-in"
        data-aos-duration="1400">
        <h1 className="text-2xl text-center mb-4 font-extrabold md:text-5xl epilogue text-[#010f1c] ">
          Customizable catering for Weddings, Parties and Corporate events.
        </h1>
        <h1 className="text-md text-center my-2 font-semibold md:text-lg t text-[#dd0902]">
          "Let us bring the best flavors to your next event or workplace!"
        </h1>
        <p className="text-gray-600 my-4 text-justify leading-[40px] roboto " data-aos="fade-up"
          data-aos-duration="1600">
          No matter the occasion, food always takes center stage! Finding the <span className="font-bold">best
            caterers in Chennai</span> can be
          overwhelming,
          but Hogist makes it effortless with our <span className="font-bold">online catering services</span>
          booking platform. Now, you can
          easily discover
          top-rated caterers near you offering both vegetarian and non-vegetarian delicacies, tailored to your
          needs.
          The best part? You get the freedom to mix and match menu items from our extensive list, ensuring a
          perfect feast for
          your event. Plus, you can select the exact quantity of dishes you need and even view real images of
          the meals before
          placing your order. Say goodbye to endless searches for <span className="font-bold">“catering services
            near me”</span> – Hogist is your
          one-stop
          solution for the best catering services in Chennai!
        </p>
        <button
          className="uppercase py-2 px-4 bg-[#dd0902] text-white font-medium  mt-5 flex items-center gap-2 border-2 border-[#dd0902] hover:text-[#dd0902] hover:bg-white "
          data-aos="fade-bottom" data-aos-duration="1800">
          order now
        </button>
      </div>
      <div className="relative hidden xl:block w-1/4">
        <img src={img2} alt="img" className="w-[700px] h-full" loading="lazy"/>
      </div>
    </div>
  )
}


