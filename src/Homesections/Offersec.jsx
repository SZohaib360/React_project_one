export const Offersec = () =>{
    return(
        <>
        <section className="sec-5 bg-[#f7f7f7] py-16">
        <div className="container mx-auto xl:w-[1140px] 2xl:w-[1340px] lg:w-[900px] md:w-[730px] sm:w-[600px]">
          <div className="sec-5-main grid md:grid-cols-2 items-center">
            <div className="sec-5-box">
              <img
                src="/public/assets/images/sec-5-img1.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="sec-5-box ml-16">
              <div className="sec-5-heading sm:pt-5">
                <h1 className="text-[#46006b] xl:text-6xl lg:text-[50px] lg:leading-[60px] md:text-4xl sm:text-5xl font-semibold">
                  Let's make something great
                  <span className="text-[#ed1c24]">Together.</span>
                </h1>
                <p className="font-medium xl:text-xl xl:py-7 sm:py-5 sm:text-lg">
                  Whether it’s a new venture or existing brand.
                </p>
                <div className="sec-5-section-btns items-center flex">
                  <a
                    href="#"
                    className="text-md 2xl:w-48 2xl:py-4 2xl:text-xl bg-transparent text-[#46006b] w-40 py-3 block text-center border-2 border-[#46006b] rounded-md hover:bg-[#46006b] hover:text-white font-semibold transition-all duration-700 ease-in-out before:block before:right-3 before:w-4 before:border-4 before:border-white before:h-4 before:absolute before:bg-[#ed1c24] before:-top-2 before:rounded-full relative"
                    >View Our Work</a
                  >
                  <a
                    href=""
                    className="ml-5  2xl:text-xl text-[#ed1c24] font-semibold before:absolute relative before:w-0 hover:before:w-full hover:before:right-auto hover:before:left-0 before:duration-300 before:h-px before:bg-[#ed1c24] before:left-auto before:-bottom-1 before:right-0"
                    >Meet Our Team</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}