import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Slider1 =()=>{
return(
  
  <div className="slider-main pb-20">
  <div className="container mx-auto xl:w-[1140px] 2xl:w-[1340px] lg:w-[900px] md:w-[730px] sm:w-[600px] ">

  <div className="sec-3-title text-center lg:text-left">
            <h1 className="text-[#46006b] font-medium pb-3 sm:text-5xl ">
            OUR <span className="text-[#ed1c24]">EXPERTISE</span>
            </h1>
            <p className="font-medium text-lg lg:w-full md:w-4/5 md:ml-20 lg:ml-0">
              What makes us different from others? We give holistic solutions
              with strategy, design & technology.
            </p>
          </div>

  <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={18}
     slidesPerView={3}
     navigation
     pagination={{ clickable: true }}
     
      
    >
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14  cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (1).webp" alt="" className="" />
      <a href="" className="text-lg font-bold py-3 block">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14 cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (2).webp" alt="" className="" />
      <a href="" className="text-lg font-bold">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14 cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (3).webp" alt="" className="" />
      <a href="" className="text-lg font-bold">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14 cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (4).webp" alt="" className="" />
      <a href="" className="text-lg font-bold">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14 cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (1).webp" alt="" className="" />
      <a href="" className="text-lg font-bold">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      <SwiperSlide className="duration-500 hover:-translate-y-5 mt-14 cursor-pointer">
      <img src="/public/assets/images/sec-4-img1 (2).webp" alt="" className="" />
      <a href="" className="text-lg font-bold">CUSTOM LOGO DESIGN</a>
      </SwiperSlide>
      
    </Swiper>
    </div>
    </div>
)

}