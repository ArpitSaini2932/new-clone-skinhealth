// File: src/pages/MainPage.jsx
import React from 'react';
import { Link } from "react-router-dom";
import img from '../import/import';

const Home = () => {
  return (
    <div className="font-sans">

      <section className="p-10 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="flex flex-col text-[64px] font-medium mb-4">
              Transform <span>Your Skin with</span>  <span className="text-blue-500">AI-Powered Care!</span>
            </h1>
            <p className="text-gray-600 text-[25px] font-normal mb-6">
              Powered by AI, guided by dermatologists—your smart solution for fast and accurate skin health insights.
            </p>
            <div className="space-x-4">
             <Link to="/scan-page"><button className="bg-blue-500 rounded-4xl text-[23px] text-white px-6 py-2  hover:bg-blue-600 hover:scale-105 hover:brightness-110 transition duration-300">Get AI Skin Analysis</button></Link> 
              <button className="px-6 py-2 text-[23px] shadow-lg rounded-4xl hover:bg-gray-100">Read More</button>
            </div>
          </div>
          <img
            src={img.lady}
            alt="Doctor"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

  
      <section className="text-center m-auto justify-center align-middle py-16 bg-white">
       <div className='flex justify-center align-middle my-12 mt-7'> <h2  className="  text-[40px] font-semibold mb-4">
          Why Choose </h2><img className="w-64" src={img.skinHealth} alt="" /><span  className='text-[40px] font-bold'>?</span>
        </div>
        <p className="text-black max-w-xl text-[20px] font-medium mx-auto my-15 mb-10">
          Combining AI innovation with trusted dermatologists to give you personalized, effective, and accessible skin care.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mx-15 px-10 my-20">
          <div>
          
            <p className="text-[17px] text-gray-600 bg-blue-50 rounded-md p-4 my-5">
            <h4 className="font-bold my-5">AI-Powered Skin Analysis</h4>
              Get instant, accurate skin condition assessments with our advanced AI—anytime, anywhere.
            </p>
            <img
              src={img.pic1}
              alt="AI Skin Analysis"
              className="rounded-lg h-96 w-full object-cover  mb-4"
            />
          </div>
          <div>
            <img
              src={img.pic2}
              alt="Certified Dermatologists"
              className="rounded-lg h-96 w-full object-cover  mb-4"
            />
            
            <p className="text-[17px] text-gray-600 bg-blue-50 rounded-md p-4 my-5">
            <h4 className="font-bold my-6">Certified Dermatologist Access</h4>
              Connect with top-rated skin experts without long wait times.
            </p>
          </div>
          <div>                                           
         
            <p className="text-[17px] text-gray-600 bg-blue-50 rounded-md p-4 my-5">
            <h4 className="font-bold my-6">Supportive Skin Community</h4>
              Join a supportive space where users share real experiences, skincare tips, and success stories.
            </p>
            <img
              src={img.pic3}
              alt="Skin Community"
              className="rounded-lg h-96 w-full object-cover  mb-4"
            />
            
          </div>
        </div>
      </section>


      <section className="text-center py-10 bg-white">
       <Link 
               to="/signup" 
               className="px-8 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
             >
               Get Started
             </Link>
      </section>

      
      <section className="py-16 px-10 bg-white">
        <div className='text-center text-3xl font-bold mb-5'>Team Members</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            
            <p className="text-gray-600">
              <img className="w-65 h-60 rounded-[50%] image-container display-block w-44 h-44 mx-auto rounded-xl object-cover border-4 border-gray-100" src="/ankit 2.jpeg" alt="" />
              <h3 className="mt-4 text-xl text-center font-bold text-gray-800 mb-2">Ankit Barnawal</h3>
            </p>
            
          </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
            
            <p className="text-gray-600">
              <img className="w-65 h-60 rounded-[50%] display-block mx-auto rounded-xl object-cover object-[10%_10%]  border-4 border-gray-100 " src="/arpit 2.jpeg" alt="" />
              <h3 className="mt-4 text-xl text-center font-bold text-gray-800 mb-2">Arpit Saini</h3>
            </p>
            
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            
            <p className="text-gray-600">
              <img className="w-65 h-60 rounded-[50%] display-block mx-auto rounded-xl object-cover object-[10%_10%]  border-4 border-gray-100" src="/trisha 2.jpeg" alt="" />
              <h3 className="mt-4 text-xl text-center font-bold text-gray-800 mb-2">Trisha</h3>
            </p>
            
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            
            <p className="text-gray-600">
              <img className="w-65 h-60 rounded-[50%] image-container display-block w-44 h-44 mx-auto rounded-xl object-cover border-4 border-gray-100" src="/piyush.jpeg" alt="" />
              <h3 className="mt-4 text-xl text-center font-bold text-gray-800 mb-2">Piyush Pranay</h3>
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
