import React from 'react';
import AuctionImage from '../assets/images/Auction.png';
import GymImage from '../assets/images/gym.png';
import WeatherImage from '../assets/images/nw.png';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg ml-8">
          <img src={AuctionImage} alt="AuctioniT" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">AuctioniT</h3>
            <p className="text-gray-300 text-sm mb-4 text-justify">
              A feature-rich auction platform built with Django, incorporating a MYSQL database to store user information, listings, bids, and comments. Features include seamless auction management, secure user authentication, Email Confirmations and real-time bidding functionality. Currently nearing deployment.
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/MilkyLane/Commerce" className="flex items-center text-blue-400 hover:text-blue-300" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-.222-.05-.454-.087-.678-.119-.53-.077-1.083-.157-1.596-.326-.89-.293-1.452-.986-1.452-1.887 0-.523.184-.986.5-1.339-.054-.13-.23-.65.048-1.355 0 0 .416-.134 1.36.507.394-.11.813-.165 1.23-.167.418.002.837.057 1.231.167.944-.641 1.36-.507 1.36-.507.277.705.102 1.225.048 1.355.316.353.5.816.5 1.339 0 .902-.564 1.595-1.456 1.887-.513.169-1.065.249-1.595.326-.224.032-.456.069-.678.119.366.32.636.986.636 1.982 0 1.428-.013 2.582-.013 2.932 0 .266.18.576.687.478C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="#" className="flex items-center text-green-400 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={GymImage} alt="Task Manager" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Gym Web</h3>
            <p className="text-gray-300 text-sm mb-4 text-justify">
              A Django-powered website for a gym, featuring a dynamic membership management system, fully responsive design, and interactive features. This project includes a professionally styled interface tailored for scalability and user engagement.
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/MilkyLane/GymWeb" className="flex items-center text-blue-400 hover:text-blue-300" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-.222-.05-.454-.087-.678-.119-.53-.077-1.083-.157-1.596-.326-.89-.293-1.452-.986-1.452-1.887 0-.523.184-.986.5-1.339-.054-.13-.23-.65.048-1.355 0 0 .416-.134 1.36.507.394-.11.813-.165 1.23-.167.418.002.837.057 1.231.167.944-.641 1.36-.507 1.36-.507.277.705.102 1.225.048 1.355.316.353.5.816.5 1.339 0 .902-.564 1.595-1.456 1.887-.513.169-1.065.249-1.595.326-.224.032-.456.069-.678.119.366.32.636.986.636 1.982 0 1.428-.013 2.582-.013 2.932 0 .266.18.576.687.478C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://nicksct.pythonanywhere.com" className="flex items-center text-green-400 hover:text-green-300" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mr-8">
          <img src={WeatherImage} alt="Weather App" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Personal Finance Tracker</h3>
            <p className="text-gray-300 text-sm mb-4 text-justify">
            A personal finance tracker app built using Xcode and Swift, featuring local Core Data storage, iCloud sync, and intuitive data visualization to help users manage expenses, set budgets, and track financial goals. Currently under development
            </p>
            <div className="flex justify-between">
              <a href="#" className="flex items-center text-blue-400 hover:text-gray-300" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-.222-.05-.454-.087-.678-.119-.53-.077-1.083-.157-1.596-.326-.89-.293-1.452-.986-1.452-1.887 0-.523.184-.986.5-1.339-.054-.13-.23-.65.048-1.355 0 0 .416-.134 1.36.507.394-.11.813-.165 1.23-.167.418.002.837.057 1.231.167.944-.641 1.36-.507 1.36-.507.277.705.102 1.225.048 1.355.316.353.5.816.5 1.339 0 .902-.564 1.595-1.456 1.887-.513.169-1.065.249-1.595.326-.224.032-.456.069-.678.119.366.32.636.986.636 1.982 0 1.428-.013 2.582-.013 2.932 0 .266.18.576.687.478C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="#" className="flex items-center text-green-400 hover:text-gray-300" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
