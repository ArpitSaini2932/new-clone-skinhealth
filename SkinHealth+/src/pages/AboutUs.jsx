

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            At SkinHealth+, we are dedicated to helping individuals take control of their skin health using advanced AI-powered dermatology solutions. Our mission is to provide personalized care and empower people to make informed decisions about their skin health, anytime, anywhere.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading platform in dermatological care, making quality skin health services accessible to everyone using technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in innovation, care, and trust. We are committed to providing accurate, reliable, and empathetic service to every individual.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">
              Our team comprises experienced dermatologists, AI experts, and tech enthusiasts who are passionate about improving lives through skin health solutions.
            </p>
          </div>
        </div>
        <div className="mb-10"></div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
