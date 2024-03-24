const Header = () => {
  return (
    <div className="w-full px-4 py-2 md:px-28 md:py-2">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full p-4">
            {/* left section */}
            <div className="flex flex-col sm:justify-center w-full large:!w-[58%] text-center large:!text-left mr-8">
                <h1 className=" self-start text-3xl font-bold text-gray-900">Upskilling Made <span className="text text-orange-600 font-[display]">PRACTICAL</span></h1>
                <h6 className="text-base medium:text-lg leading-6 medium:leading-[26px] font-light text-gray-850 mt-4 large:!w-[90%] self-start text-start">PW Skills is the one-stop destination for your upskilling journey. Brace yourself to find the best job-ready courses and high-end technologies available in the sector. And if that weren&#8217;t good enough, get the highest quality course content at the most affordable prices!</h6>
                <button className='w-full  md:w-40 mt-4 bg bg-red-500 text-white px-4 py-3 rounded-md font-medium'>Explore Courses</button>
            </div>

            {/* right section  */}
            <div className="w-full regular:!w-[65%] large:!w-[42%] relative z-50 mx-auto">
                <img className="" src="https://pwskills.com/images/homePage/hero-bg.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Header
