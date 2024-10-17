"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown, faCheckCircle, faMapLocation,faThLarge, faEnvelope, faMailBulk, faBirthdayCake, faPhone, faTty } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image';
import man from '../app/assets/man.jpg'; 
import background from '../app/assets/background.jpg';
import { faFacebook, faLinkedinIn, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; 


const colors = {
  primary: "#1e049f", 
  background: "#f3f4f6", 
  textPrimary: "#111827", 
  textSecondary: "#6b7280", 
  white: "#ffffff", 
};

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: colors.background }}
    >
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-5 right-10">
          <div className="relative">
            <button
              className="px-6 py-3 rounded-md flex items-center gap-3"
              style={{ backgroundColor: colors.primary, color: colors.white }}
            >
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <span>English</span>
              <FontAwesomeIcon icon={faChevronDown} size="lg" />
            </button>
          </div>
        </div>

        <div
          className="absolute w-full flex justify-center"
          style={{ bottom: '2vh' }}
        >
          <div
            className="w-[160px] h-[160px] rounded-full overflow-hidden border-4"
            style={{ borderColor: colors.white }}
          >
            <Image src={man} alt="man" />
          </div>
        </div>
      </div>
      <div className='mt-2 text-center flex items-center'>
        <h1 className='text-4xl font-bold'>John Legend</h1>
        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 ml-2" size="2x" />
      </div>
      <h2 className='text-2xl mt-1' style={{ color: colors.textSecondary }}>Web Developer</h2>
      <h3 className='text-xl mt-2'>Soft Tech</h3>
      <p className="text-md leading-relaxed text-center max-w-6xl mx-auto mt-4 px-4">
        A web developer is a professional who specializes in designing and building websites. Their primary responsibility 
        is to create and maintain the structure, layout, and features of a website. Web developers can be broadly categorized 
        into front-end development and back-end development.
      </p>

    
      <div className='flex justify-center gap-48 mt-8 relative'>
        <FontAwesomeIcon icon={faMapLocation} className="text-gray-400" size="2x" />
        <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-black-600" />
        <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
        <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600" />
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-blue-600" />
        <button className="absolute right-[-40px] mt-24 rounded-full bg-blue-800 text-white p-4 shadow-lg">
        <FontAwesomeIcon icon={faThLarge} size="2x" />
  </button>
      </div>
      <FontAwesomeIcon icon={faWhatsapp}  size="2x" className="text-green-600 mt-6"/>
    

      <div className='flex justify-around items-center mt-12 gap-16 w-full px-96'>
        <div className='flex flex-col items-center'>
          <FontAwesomeIcon icon={faMailBulk} size="3x" className="text-blue-800" />
          <p className="mt-2">john@gmail.com</p>
        </div>

        <div className='flex flex-col items-center'>
          <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-blue-800" />
          <p className="mt-2">johnlegend@gmail.com</p>
        </div>
      </div>

      <div className='flex justify-around items-center mt-12 gap-16 w-full px-96'>
        <div className='flex flex-col items-center'>
          <FontAwesomeIcon icon={faBirthdayCake} size="3x" className="text-blue-800" />
          <p className="mt-2">1995-07-12</p>
        </div>

        <div className='flex flex-col items-center'>
          <FontAwesomeIcon icon={faPhone} size="3x" className="text-blue-800" />
          <p className="mt-2">+91 8452525210</p>
        </div>
      </div>
      <div className='flex justify-around items-center mt-12 gap-16 w-full px-96'>
        <div className='flex flex-col items-center'>
          <FontAwesomeIcon icon={faTty} size="3x" className="text-blue-800" />
          <p className="mt-2">+91 565416845</p>
        </div>
       

      </div>
      


        </div>
    
  );
}
