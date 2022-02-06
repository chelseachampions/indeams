import React from 'react';

import TargetImage from '../images/cyp-indeams-teachers-doctors-parents.png';

function Target() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="h2" data-aos="fade-up">We share the same mission as you.</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">

              {/* Image */}
              <div className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <img className="mx-auto md:max-w-none" src={TargetImage} width="540" height="520" alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="mb-2 text-xl text-purple-600 font-architects-daughter" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Together we can improve and maintain every Child and Young Person's mental health</div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="mb-2 h4"><span className="text-purple-600">.</span> For GPs and mental health services</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="mb-2 h4"><span className="text-teal-500">.</span> For schools</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="mb-2 h4"><span className="text-pink-500">.</span> For parents and carers</h4>
                    <p className="text-lg text-gray-400">You want your child to thrive.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Target;
