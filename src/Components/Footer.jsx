export const Footer =()=>{
    
  var btn = $('.btn-scroll');

$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
  
  
  return(
        <>
        <footer className=" relative overflow-hidden">
      <div className="container mx-auto xl:w-[1140px] 2xl:w-[1340px] lg:w-[900px] md:w-[730px] sm:w-[600px]">
        <div className="footer-main grid lg:grid-cols-5 sm:grid-cols-2">
          <div className="footer-box">
            <img src="/public/assets/images/H-logo.png" alt="" />
            <p className="py-4 xl:text-base font-medium lg:text-sm">
              4517 Washington Ave.Manchester, Kentucky 39495
            </p>
            <h5 className="font-semibold pb-3 text-xl text-[#46006b]">Follow Us</h5>
            <ul className="flex">
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#4661c5] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#44b1e4] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#c135b6] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-instagram"></i
                ></a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:-translate-y-2 duration-500 mr-2 block w-7 h-7 rounded-full bg-[#0077b5] text-center leading-7 text-sm text-white"
                  ><i className="fab fa-linkedin-in"></i
                ></a>
              </li>
            </ul>
          </div>
          <div className="footer-box lg:ml-5 sm:ml-20">
            <h1 className="py-5 text-[#46006b] font-semibold text-xl">About Us</h1>
            <ul>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Mission & Vision</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Our Team</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Press & Media</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Advertising</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Testimonials</a
                >
              </li>
            </ul>
          </div>
          <div className="footer-box lg:ml-5">
            <h1 className="py-5 text-[#46006b] font-semibold text-xl">Resources</h1>
            <ul>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Mission & Vision</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Our Team</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Press & Media</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Advertising</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Testimonials</a
                >
              </li>
            </ul>
          </div>
          <div className="footer-box lg:ml-5 sm:ml-20">
            <h1 className="py-5 text-[#46006b] font-semibold text-xl">We offer</h1>
            <ul>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Mission & Vision</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Our Team</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Press & Media</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Advertising</a
                >
              </li>
              <li>
                <a
                  href=""
                  className="font-medium hover:translate-x-1.5 mb-1 hover:text-[#ed1c24] block duration-500"
                  >Testimonials</a
                >
              </li>
            </ul>
          </div>
          <div className="footer-box ">
            <h1 className="py-5 text-[#46006b] font-semibold text-xl">App & Payment</h1>
            <p className="pb-4 xl:text-base font-medium lg:text-sm">
              Download our Apps and get extra 15% Discount on your first Order.
            </p>
            <div className="footer-imgs flex">
              <img
                src="/public/assets/images/footerimg1.png"
                alt=""
                className="xl:h-10 lg:h-8 mr-1"
              />
              <img
                src="/public/assets/images/footerimg2.png"
                alt=""
                className="xl:h-10 lg:h-8"
              />
            </div>
          </div>
        </div>
        <div
          className="footer-bottom flex border-t-2 h-20 mt-10 items-center justify-between"
        >
          <div className="footer-bottom">
            <ul className="flex">
              <li><a href="" className="mr-3 text-sm">Privacy policy</a></li>
              <li><a href="" className="mr-3 text-sm">Cookies</a></li>
              <li><a href="" className="mr-3 text-sm">Terms of service</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="text-sm">
              © 2016-2023 Vibrant Media Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed-text font-semibold fixed bottom-1/2 -left-28 -rotate-90 hidden md:block">
        <span>Email Us - <a href="">hello@madebyshape.co.uk</a></span>
      </div>
      <div
        className="btn-scroll fixed font-semibold right-3 bottom-1/2 -rotate-90 cursor-pointer duration-500"
      >
        <span className="flex relative group"
          >Go Up
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 absolute -bottom-1 left-12 group-hover:left-14 duration-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            /></svg> 
        </span>
      </div>
    </footer>
        </>
    )
}