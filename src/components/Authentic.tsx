import React from "react";

const Authentic = () => {
  return (
    <section id="authentic" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] flex flex-col items-center justify-center px-6">
        <h2 className="font-display text-2xl font-bold uppercasetext-center leading-tight tracking-[0.02em] text-white">
          AUTHENTIC DRUMS. <span className="text-[#42FF00]">NO LIMITS.</span>
        </h2>
        <p className="text-md text-white my-10 lg:text-xl lg:max-w-2xl text-center leading-relaxed [font-family:ui-sans-serif,system-ui,sans-serif]">
          Unlimited access to a rich library of real, handcrafted African drum
          loops, built by producers who understand rhythm, culture, and modern
          music.
        </p>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <iframe
          src="https://soundcloud.com/isaac-osamor/manifxt-allure-drum-loop-97bpm-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fisaac-osamor%252Fmanifxt-allure-drum-loop-97bpm-1"
          title="Manifxt Allure Drum Loop 97bpm"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Authentic;
