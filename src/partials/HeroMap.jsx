import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import WorldImage from '../images/worldmap.png';
import UserImage01 from '../images/world-user-01.jpg';
import UserImage02 from '../images/world-user-02.jpg';
import UserImage03 from '../images/world-user-03.jpg';
import UserImage04 from '../images/world-user-04.jpg';
import UserImage05 from '../images/world-user-05.jpg';
import UserImage06 from '../images/world-user-06.jpg';
import UserImage07 from '../images/world-user-07.jpg';
import UserImage08 from '../images/world-user-08.jpg';

function HeroMap() {

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const [items] = useState([
    {
      img: UserImage01,
      alt: 'Testimonial 01',
      quote: '“ I used Indeams to get me back into my love of Dancing. My confidence has been quite low since starting University.“',
      name: 'Darya Semenova',
      role: 'Uni Student, 19'
    },
    {
      img: UserImage02,
      alt: 'Testimonial 02',
      quote: '“ I liked the idea of joining a team that plays Xbox online and then just chatting about life whilst doing so. It has been good for my mental health for sure!“',
      name: 'Greg Sebastian',
      role: 'Trainee Chef, 22'
    },
    {
      img: UserImage03,
      alt: 'Testimonial 03',
      quote: '“ I moved country with my family two years ago. I struggled to fit in because I did not speak English but Indeams has helped me meet similar people.“',
      name: 'Dominik Prasad',
      role: '6th Form, 17'
    }
  ]);

  const testimonials = useRef(null);

  const stopAutorotate = () => {
    setAutorotate(null);
  }
  
  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height = testimonials.current.children[active].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, autorotate])

  useEffect(() => {
    heightFix()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        

          {/* Section header */}
       

          

          {/* Carousel area*/}
          <div className="max-w-2xl mx-auto">

            {/* World map */}
            <div className="py-12">
              <div className="relative">
                {/* Map */}
                <div className="absolute inset-0 flex items-end justify-center" aria-hidden="true">
                  <div className="bottom-0 transform translate-y-8 border-l border-gray-500 border-dashed" style={{ height: '50%' }}></div>
                </div>
                {/* People pics */}
                <img src={WorldImage} width="672" height="330" alt="World map" />
                <img className="absolute rounded-full" style={{ top: '22%', left: '52%' }} src={UserImage01} width="32" height="32" alt="User 01" data-aos="fade-up" />
                <img className="absolute rounded-full" style={{ top: '50%', left: '58%' }} src={UserImage02} width="48" height="48" alt="User 02" data-aos="fade-up" data-aos-delay="400" />
                <img className="absolute rounded-full" style={{ top: '8.5%', left: '70.5%' }} src={UserImage03} width="56" height="56" alt="User 02" data-aos="fade-up" data-aos-delay="100" />
                <img className="absolute rounded-full" style={{ top: '34%', left: '76.5%' }} src={UserImage04} width="72" height="72" alt="User 04" data-aos="fade-up" data-aos-delay="700" />
                <img className="absolute rounded-full" style={{ top: '29.5%', left: '8.5%' }} src={UserImage05} width="48" height="48" alt="User 05" data-aos="fade-up" data-aos-delay="500" />
                <img className="absolute rounded-full" style={{ top: '56%', left: '19%' }} src={UserImage06} width="56" height="56" alt="User 06" data-aos="fade-up" data-aos-delay="200" />
                <img className="absolute rounded-full" style={{ top: '20%', left: '24.5%' }} src={UserImage07} width="64" height="64" alt="User 07" data-aos="fade-up" data-aos-delay="600" />
                <img className="absolute rounded-full" style={{ top: '39%', left: '43%' }} src={UserImage08} width="40" height="40" alt="User 08" data-aos="fade-up" data-aos-delay="300" />
              </div>
            </div>

            {/* Carousel */}
            <div className="mt-6">

              {/* Testimonials */}
              <div className="relative flex items-start" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className="text-center"
                    enter="transition ease-in-out duration-500 transform order-first"
                    enterStart="opacity-0 scale-98"
                    enterEnd="opacity-100 scale-100"
                    leave="transition ease-out duration-300 transform absolute"
                    leaveStart="opacity-100 scale-100"
                    leaveEnd="opacity-0 scale-98"
                  >
                    <div className="relative inline-flex flex-col justify-center mb-4">
                      <img className="rounded-full" src={item.img} width="56" height="56" alt={item.alt} />
                      <svg className="absolute top-0 right-0 w-6 h-5 -mr-3 text-purple-600 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                    <blockquote className="text-lg text-gray-400">{item.quote}</blockquote>
                    <div className="mt-3 font-medium text-gray-700">
                      <cite className="not-italic text-gray-200">{item.name}</cite> / <span className="text-purple-600">{item.role}</span>
                    </div>
                  </Transition>
                ))}

              </div>

              {/* Bullets */}
              <div className="flex justify-center mt-6">

                {items.map((item, index) => (
                  <button className="p-1 group" key={index} onClick={() => { setActive(index); stopAutorotate(); }}>
                    <span className={`block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out ${active === index ? 'bg-gray-200' : 'bg-gray-500'}`}></span>
                  </button>
                ))}

              </div>

            </div>

          </div>
        </div>
 
    </section>
  );
}

export default HeroMap;