import React from 'react';
import './hero.css';
import Typewriter from 'typewriter-effect';
import Button from './button';
import Social from './social';
const Hero = () => {
  return (
    <section id="hero" className="flex justify-center mx-auto lg:mt-24 mt-24 items-center text-center font-custom">
      <div className="flex flex-col gap-8">
        <h6 className="md:text-6xl text-5xl text-title_color font-semibold">
          Hanane Lachoub
          <div className="text-[#FFD700] hand-icon ml-2 text-6xl font-bold cursor-pointer animate-hand bounce-animation">
            <ion-icon name="hand-right-outline"></ion-icon>
          </div>
        </h6>
        <h2 className="font-semibold text-[#FFD700] lg:text-4xl sm:text-4xl text-3xl inline-block">
          <Typewriter
            options={{
              strings: ['Full stack Developer', 'AI Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-sm font-light text-title_color md:max-w-xl max-w-lg px-4 text-center leading-7">
          Committed to crafting digital experiences that exceed your expectations, I'm dedicated to putting in the hard work to bring your vision to life. Your satisfaction is my utmost priority.
        </p>
        <Social />
        
        
        
        <Button />
      </div>
    </section>
  );
};

export default Hero;
