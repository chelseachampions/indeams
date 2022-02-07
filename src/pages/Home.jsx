import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import FeaturesHome from '../partials/FeaturesHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FeatureScroll from '../partials/FeatureScroll';
import StatsMap from '../partials/StatsMap';
import FeaturesHome1 from '../partials/FeaturesHome1';
import Carousel from '../partials/Carousel';
import Banner from '../partials/Banner';
import FeaturesBlocks1 from '../partials/FeaturesBlocks1';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      
      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative h-0 max-w-6xl mx-auto pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks1/>
        <FeaturesHome1 />
        <Process />
        
        <FeaturesHome />
        <Target />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;