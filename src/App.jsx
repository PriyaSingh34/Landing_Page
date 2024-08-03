import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Process from './components/Process';
import Works from './components/Works';
import Services from './components/Services';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import SubscriptionBenefits from "./components/SubscriptionBenefits"
import WhyClientsChooseUs from './components/WhyClientsChooseUs';

const App = () => {
  return (
    <div className='w-full'>
      <Header />
      <main className='w-full'>
        <Home />
        <WhyClientsChooseUs/>
        <Process />
        <Works />
        <SubscriptionBenefits/>
        <Services />
        <FAQs />
        <Footer2/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
