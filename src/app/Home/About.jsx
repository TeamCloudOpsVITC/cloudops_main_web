// About.js

import React from 'react';

const About = () => {
  return (
    <div className='rounded-lg m-10 mb-16 w-full'>
      <div className='text-yellow-500 p-10 text-5xl'>About</div>
      <div className="flex flex-col lg:flex-row justify-between items-center p-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl mb-8 text-white p-8 mr-10">Founded in 2022, CloudOps is a premier cloud-based community for aspiring tech professionals. We bring together students across our university to collaborate, learn, and grow their skills in cloud computing. Our community is dedicated to providing students with opportunities to engage in real-world industrial projects, network with industry leaders, and participate in exciting events and webinars that showcase the latest trends and technologies in cloud computing.</p>
        </div>
        <div className="lg:w-1/2 text-right">
          <img src="/cloud-logo.png" alt="CloudOps Logo" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      <div className='text-yellow-500 p-10 text-5xl'>Features of Cloud Computing</div>
      <div className="flex justify-between p-8">
        <div className="feature-box">
          <h3>Software-as-a-Service</h3>
          <p>SaaS providers enable software access anywhere, anytime, as long as there’s an Internet connection. These tools have opened access to more advanced tools and capabilities, like automation, optimized workflows in various locations.</p>
        </div>
        <div className="feature-box">
          <h3>Hybrid cloud and multicloud</h3>
          <p>Hybrid cloud is a computing environment that connects a company’s on-premises private cloud services and third-party public cloud services into a single, flexible infrastructure for running critical applications and workloads.</p>
        </div>
        <div className="feature-box">
          <h3>Big data analytics</h3>
          <p>Cloud computing allows organizations to tap into vast quantities of both structured and unstructured data available to harness the benefit of extracting business value.</p>
        </div>
        <div className="feature-box">
          <h3>Cloud storage</h3>
          <p>Cloud data storage enables files to be automatically saved to the cloud, and then they can be accessed, stored and retrieved from any device with an Internet connection.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
