'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons
import { ArrowDownTrayIcon, CodeBracketIcon } from '@heroicons/react/24/solid'; // Still using heroicons for specific UI elements

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroSocialsRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const projectItemsRef = useRef([]); // Ref for individual project cards

  useEffect(() => {
    // GSAP Animations
    // Hero Section Entrance Animation
    gsap.from([heroTitleRef.current, heroSubtitleRef.current, heroSocialsRef.current], {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2, // Stagger the animation for title, subtitle, and socials
    });

    // About Section Animation on Scroll
    gsap.from(aboutSectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top 80%', // Start animation when top of section is 80% in viewport
        toggleActions: 'play none none none', // Play once
      },
    });

    // Projects Section Staggered Animation on Scroll
    gsap.fromTo(
      projectItemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2, // Stagger the animation for each project card
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: 'top 80%', // Start animation when top of projects section is 80% in viewport
          toggleActions: 'play none none none', // Play once
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Aliff | Portfolio</title>
        <meta name="description" content="Aliff's personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Fonts - Space Grotesk for headings, Inter for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-950 to-indigo-950 text-gray-100 font-inter antialiased">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative overflow-hidden py-24 md:py-32 text-center max-w-5xl mx-auto px-4"
        >
          {/* Background radial gradient for visual flair */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800/30 via-transparent to-transparent opacity-50 z-0"></div>

          <h1
            ref={heroTitleRef}
            className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-lg"
          >
            Hi, I&apos;m Aliff
          </h1>
          <p
            ref={heroSubtitleRef}
            className="relative z-10 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            A software engineer building modern, minimal, and efficient digital
            experiences with a focus on user-centric design.
          </p>
          <div
            ref={heroSocialsRef}
            className="relative z-10 flex justify-center gap-8"
          >
            <a
              href="https://github.com/aliffaizuddin"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-105"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-7 w-7" />
              <span className="text-lg font-medium hidden md:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aliff-aizuddin-5623b2235"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-7 w-7" />
              <span className="text-lg font-medium hidden md:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:aliffaizuddin47@gmail.com"
              className="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-105"
              aria-label="Email Me"
            >
              <FaEnvelope className="h-7 w-7" />
              <span className="text-lg font-medium hidden md:inline">Email</span>
            </a>
          </div>
        </section>

        {/* ABOUT/RESUME SECTION */}
        <section
          ref={aboutSectionRef}
          className="py-20 px-4 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 md:p-12 text-center shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 ease-out">
            <h2 className="text-4xl font-space-grotesk font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Curious to know more?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Download my resume to get a comprehensive overview of my skills,
              experience, and professional journey.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-900 font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              <ArrowDownTrayIcon className="h-6 w-6" />
              Download Resume
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section ref={projectsSectionRef} className="mt-24 py-20 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            My Latest Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div
              className="relative group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl overflow-hidden
                         hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-gradient-to-br from-cyan-500 to-blue-500 blur-md -z-10"></div>

              <div className="flex items-center gap-4 mb-4">
                <CodeBracketIcon className="h-9 w-9 text-cyan-400 flex-shrink-0" />
                <h3 className="text-2xl font-space-grotesk font-bold text-gray-50">Mobile Phone Based VR Car Repair and Inspection Simulator</h3>
              </div>
              <p className="text-sm text-gray-300 mb-4">
              An interactive VR environment for basic car repair and inspection using Unity with real -time 
              hand tracking functionality powered by OpenCV (Python) for immersive user interaction. 
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs font-semibold rounded-full">Unity</span>
                <span className="px-3 py-1 bg-green-600/30 text-green-300 text-xs font-semibold rounded-full">C#</span>
                <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-xs font-semibold rounded-full">Image Processing</span>
              </div>
              <a
                href="https://drive.google.com/file/d/1XcA6E58x-Pg_Dwf5p-bkIEfVtP9OQFab/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base
                           group-hover:translate-x-1 transition-transform duration-200"
              >
                Download App
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Project Card 2 */}
            <div
              className="relative group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl overflow-hidden
                         hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-gradient-to-br from-purple-500 to-pink-500 blur-md -z-10"></div>

              <div className="flex items-center gap-4 mb-4">
                <CodeBracketIcon className="h-9 w-9 text-purple-400 flex-shrink-0" />
                <h3 className="text-2xl font-space-grotesk font-bold text-gray-50">KTDI Hostel Booking App</h3>
              </div>
              <p className="text-sm text-gray-300 mb-4">
              Hostel booking system for Kolej Tun Dr Ismail written with Angular. 
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-yellow-600/30 text-yellow-300 text-xs font-semibold rounded-full">Angular</span>
                <span className="px-3 py-1 bg-red-600/30 text-red-300 text-xs font-semibold rounded-full">PhP</span>
                <span className="px-3 py-1 bg-teal-600/30 text-teal-300 text-xs font-semibold rounded-full">Typescript</span>
              </div>
              <a
                href="https://github.com/aliffaizuddin/KTDI_App/tree/main/SANN-BEAR-main/SANN-BEAR-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-base
                           group-hover:translate-x-1 transition-transform duration-200"
              >
                View Project
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Project Card 3 (Example) */}
            <div
              className="relative group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl overflow-hidden
                         hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-gradient-to-br from-green-500 to-lime-500 blur-md -z-10"></div>

              <div className="flex items-center gap-4 mb-4">
                <CodeBracketIcon className="h-9 w-9 text-green-400 flex-shrink-0" />
                <h3 className="text-2xl font-space-grotesk font-bold text-gray-50">Barber Service App</h3>
              </div>
              <p className="text-sm text-gray-300 mb-4">
              A sleek and user-friendly barber booking app written with Flutter to prioritize customer satisfaction 
              while empowering barbers to manage their business efficiently in app development. 
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-600/30 text-red-300 text-xs font-semibold rounded-full">Flutter</span>
                <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-xs font-semibold rounded-full">Dart</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs font-semibold rounded-full">MVVM</span>
              </div>
              <a
                href="https://github.com/aliffaizuddin/BarberMate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-base
                           group-hover:translate-x-1 transition-transform duration-200"
              >
                View Project
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-24 py-8 text-sm text-gray-500 text-center border-t border-gray-800">
          &copy; {new Date().getFullYear()} Aliff. All rights reserved.
        </footer>
      </main>
    </>
  );
}
