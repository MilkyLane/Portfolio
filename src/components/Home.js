import React from 'react';

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Nicholas Chihanga</h1>
        <h2 className="text-3xl mb-8">Web Developer & Software Engineer</h2>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          View My Work
        </a>
      </div>
      <div className="absolute bottom-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Home;

