export const Contactform = () =>{
    return(
        
        <div className="Contactform py-20">
        <div className="container mx-auto xl:w-[1140px] 2xl:w-[1340px]">
          <div className="contact-main flex items-center ">
            <div className="contact-text basis-[40%]">

    <h1 className="text-[#46006b] font-medium pb-3 sm:text-5xl ">
    Get In  <span className="text-[#ed1c24]">Touch</span>
    </h1>
    <p className="font-medium pb-5 text-base lg:w-full md:w-4/5 md:ml-20 lg:ml-0">
    Contact us if you have any questions about some of our HVAC services. You can also call if you need help with a heating, cooling or air quality issues. We provide free quotes for any new heating or AC equipment installation. Whether you need residential or commercial services, our experienced HVAC specialists are ready to serve you.</p>
    <h5 className="font-semibold pb-3 text-xl text-[#46006b]">Follow Us</h5>
            <ul className="flex">
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#4661c5] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#44b1e4] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#c135b6] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#0077b5] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
  
            </div>
            <div className="form-details p-10 shadow-xl basis-[60%] ml-20">
                <div className="input-fields grid grid-cols-2 gap-5">
                    <input type="text" placeholder="Name" className="text-base p-3 border-2 border-[#46006b]  rounded col-span-2" />
               
                    <input type="text" placeholder="Phone" className="text-base p-3 border-2 border-[#46006b] rounded "/>
               
                
                    <input type="text" placeholder="Email" className="text-base p-3 border-2 border-[#46006b] rounded "/>

            
                
                    <textarea name="text" id="textarea" placeholder="Message" cols="30" rows="10" className="text-base rounded h-[150px] mb-5 p-3 col-span-2 border-2 border-[#46006b]  "></textarea>
                </div>
                <div className="form-btn">
                <a
              href="#"
              className=" lg:text-base md:text-sm md:w-32 md:py-3 2xl:w-48 2xl:py-4 2xl:text-xl md:mr-0 sm:mr-10 bg-[white] text-[#46006b] lg:w-40 lg:py-3 py-3 w-40 block text-center border-2 border-[#46006b] rounded-md hover:bg-[#46006b] hover:text-white font-semibold transition-all duration-700 ease-in-out before:block before:right-3 before:w-4 before:border-4 before:border-white before:h-4 before:absolute before:bg-[#ed1c24] before:-top-2 before:rounded-full relative"
              >Start a Project</a>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}