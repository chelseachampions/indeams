import React, { useEffect } from 'react';
// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import '/node_modules/swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function Carousel() {

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl px-4 mx-auto sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2 font-red-hat-display">From rough design files, to powerful products</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            <div className="max-w-lg swiper-slide">
              <img className="transition-opacity duration-300" src='/images/carousel-item-01.jpg' width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex flex-grow">
                  <a className="inline-flex self-center mx-auto text-white bg-purple-600 btn-sm hover:bg-purple-500" href="#0">Learn more</a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="px-3 py-2 text-xs font-medium text-center text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-50 rounded-full hover:bg-opacity-100" href="#0">Creative Services</a>
                </div>
              </div>
            </div>
            <div className="max-w-lg swiper-slide">
              <img className="transition-opacity duration-300" src='/images/carousel-item-02.jpg' width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex flex-grow">
                  <a className="inline-flex self-center mx-auto text-white bg-purple-600 btn-sm hover:bg-purple-500" href="#0">Learn more</a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="px-3 py-2 text-xs font-medium text-center text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-50 rounded-full hover:bg-opacity-100" href="#0">Creative Services</a>
                </div>
              </div>
            </div>
            <div className="max-w-lg swiper-slide">
              <img className="transition-opacity duration-300" src='/images/carousel-item-03.jpg' width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex flex-grow">
                  <a className="inline-flex self-center mx-auto text-white bg-purple-600 btn-sm hover:bg-purple-500" href="#0">Learn more</a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="px-3 py-2 text-xs font-medium text-center text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-50 rounded-full hover:bg-opacity-100" href="#0">Creative Services</a>
                </div>
              </div>
            </div>
            <div className="max-w-lg swiper-slide">
              <img className="transition-opacity duration-300" src='/images/carousel-item-04.jpg' width="540" height="460" alt="Carousel item 04" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex flex-grow">
                  <a className="inline-flex self-center mx-auto text-white bg-purple-600 btn-sm hover:bg-purple-500" href="#0">Learn more</a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="px-3 py-2 text-xs font-medium text-center text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-50 rounded-full hover:bg-opacity-100" href="#0">Creative Services</a>
                </div>
              </div>
            </div>
            <div className="max-w-lg swiper-slide">
              <img className="transition-opacity duration-300" src='/images/carousel-item-05.jpg' width="540" height="460" alt="Carousel item 05" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex flex-grow">
                  <a className="inline-flex self-center mx-auto text-white bg-purple-600 btn-sm hover:bg-purple-500" href="#0">Learn more</a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="px-3 py-2 text-xs font-medium text-center text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-50 rounded-full hover:bg-opacity-100" href="#0">Creative Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="box-content relative z-20 flex items-center justify-center w-12 h-12 p-1 transition duration-150 ease-in-out bg-purple-600 shadow-xl carousel-prev group hover:bg-purple-500 dark:bg-gray-800 dark:hover:bg-purple-600 dark:hover:bg-opacity-25">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 text-white transition duration-150 ease-in-out fill-current dark:text-gray-400 group-hover:text-white dark:group-hover:text-purple-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="box-content relative z-20 flex items-center justify-center w-12 h-12 p-1 transition duration-150 ease-in-out bg-purple-600 shadow-xl carousel-next group hover:bg-purple-500 dark:bg-gray-800 dark:hover:bg-purple-600 dark:hover:bg-opacity-25">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 text-white transition duration-150 ease-in-out fill-current dark:text-gray-400 group-hover:text-white dark:group-hover:text-purple-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Carousel;
