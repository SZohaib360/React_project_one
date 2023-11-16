export const Portfoliosec = () =>{

    jQuery(document).ready(function () {


        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });
      });
      
      var portfolioIso = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
      
      
      jQuery(document).on('click', '#portfolio-flters li', function () {
      
        var dataFilter = jQuery(this).data('filter');
        jQuery('.portfolio-item').hide();
        
        if(dataFilter == '*'){
            jQuery('.portfolio-item').show();
        }
        else{
            jQuery(dataFilter).show();
        }
      
        jQuery('#portfolio-flters li').removeClass('filter-active');
        jQuery(this).addClass('filter-active');
        portfolioIso.isotope();
      });




    return(
        <>
        <section className="portfolio pb-20 overflow-hidden"  id="portfolio">
         <div className="container mx-auto xl:w-[1140px] 2xl:w-[1340px]">

  <div className="sec-3-title text-center" id="portfolio-sec-title">
    <h1 className="text-[#46006b] font-medium pb-3 sm:text-5xl ">
      OUR  <span className="text-[#ed1c24]">PORTFOLIO</span>
    </h1>
    <p className="font-medium pb-5 text-lg lg:w-full md:w-4/5 md:ml-20 lg:ml-0">
      View our branding and design portfolio to see a wide array of work we have delivered to our clients globally.


    </p>
  </div>

  <div className="portfolio-filters py-10 ml-72 ">
    <ul id="portfolio-flters" className="flex">
      <li data-filter="*" className="filter-active text-sm border-2 border-[#46006b] hover:bg-[#46006b] duration-500 rounded-md hover:text-white cursor-pointer text-black font-semibold p-3 mx-1">All</li>
      <li data-filter=".filter-web" className="text-sm border-2 border-[#46006b] hover:bg-[#46006b] duration-500 rounded-md hover:text-white cursor-pointer text-black font-semibold p-3 mx-1">WEBSITE DESIGN</li>
      <li data-filter=".filter-logo" className="text-sm border-2 border-[#46006b] hover:bg-[#46006b] duration-500 rounded-md hover:text-white cursor-pointer text-black font-semibold p-3 mx-1">E-COMMERCE STORE</li>
      <li data-filter=".filter-store" className="text-sm border-2 border-[#46006b] hover:bg-[#46006b] duration-500 rounded-md hover:text-white cursor-pointer text-black font-semibold p-3 mx-1">LOGO DESIGN</li>
    </ul>
  </div>

  <div className="portfolio-container flex gap-36">
    <div className="portfolio-item filter-web w-[31.5%] ml-5 mb-5 ">
      <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
      before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
          <img src="/public/assets/images/port-web-1.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
          <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
              <h4 className="text-lg ">Web-1</h4>
              <p className="">Web</p>
          </div>
          <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
              <a href="/public/assets/images/port-web-1.jpg" data-gallery="portfolioGallery"
                  className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
          </div>
      </div>
  </div>
  <div className="portfolio-item filter-store w-[31.5%] ml-5 mb-5 ">
    <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
    before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
        <img src="/public/assets/images/port-store-3.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
        <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
            <h4 className=" text-lg">Store-1</h4>
            <p className="">Store</p>
        </div>
        <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
            <a href="/public/assets/images/port-store-3.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
        </div>
    </div>
</div>
<div className="portfolio-item filter-web w-[31.5%] ml-5 mb-5">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-web-3.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Web-3</h4>
          <p className="">Web</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-web-3.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>


<div className="portfolio-item filter-logo w-[31.5%] ml-5 mb-5">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-logo-1.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Logo-1</h4>
          <p className="">Logo</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-logo-1.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>
<div className="portfolio-item filter-web w-[31.5%] ml-5 mb-5">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-web-2.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Web-2</h4>
          <p className="">Web</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-web-2.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>
<div className="portfolio-item filter-logo w-[31.5%] ml-5 mb-5">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-logo-3.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Logo-3</h4>
          <p className="">Logo</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-logo-3.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>

<div className="portfolio-item filter-store w-[31.5%] ml-5 mb-5">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-store-1.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt="" />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Store-1</h4>
          <p className="">Store</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-store-1.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>
<div className="portfolio-item filter-logo w-[31.5%] ml-5 mb-5 ">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-logo-2.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Logo-2</h4>
          <p className="">Logo</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-logo-2.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>
<div className="portfolio-item filter-store w-[31.5%] ml-5 mb-5 ">
  <div className="portfolio-wrap group relative before:absolute  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:left-[30px]
  before:top-[30px] before:right-[30px] before:bottom-[30px] before:opacity-0 before:duration-500 hover:before:opacity-80 hover:before:left-0 hover:before:right-0 hover:before:top-0 hover:before:bottom-0" >
      <img src="/public/assets/images/port-store-2.jpg" className="img-fluid w-full h-[330px] object-cover object-top" alt=""  />
      <div className="portfolio-info text-center absolute top-0 opacity-0 text-white duration-500 group-hover:opacity-100 group-hover:top-28 w-full text-lg font-semibold ">
          <h4 className="text-lg ">Store-2</h4>
          <p className="">Store</p>
      </div>
      <div className="portfolio-links text-center absolute bottom-0 w-full opacity-0 group-hover:opacity-100 group-hover:bottom-32 text-white duration-500 text-lg">
          <a href="/public/assets/images/port-store-2.jpg" data-gallery="portfolioGallery"
              className="portfolio-lightbox" title="App 1"><i className="fas fa-plus"></i></a>
      </div>
  </div>
</div>
</div>
</div>
</section>
        </>
    )
}