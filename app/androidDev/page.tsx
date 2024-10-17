"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faChevronDown,
  faCheckCircle,
  faMapLocation,
  faMailBulk,
  faBirthdayCake,
  faContactBook,
  faThLarge,
  faMobile,
 
} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import smoke from '../assets/smoke.jpg';
import { faDiscord, faPinterest, faTwitch, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import qr from '../assets/qr.png'
import man from '../assets/man.jpg'; 
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';

const colors = {
    primary: "#628bf3",
    background: "#232f4d", 
    textSecondary: "#6b7280", 
    white: "#ffffff", 
    blueFill: "#628bf3",
    grayFill: "#6b7280", 
  };
  
export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: colors.background }}  
    >
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: `url(${smoke.src})`,
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
          className="absolute w-full flex justify-center bottom-[-50px]"
        >
          <div
            className="w-[160px] h-[160px] rounded-full overflow-hidden border-4"
            style={{ borderColor: colors.white }}
          >
            <Image src={man} alt="man" />
          </div>
        </div>
      </div>

      <div className='mt-16 text-center flex items-center'>
        <h1 className='text-4xl text-white font-bold'>John Legend</h1>
        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 ml-2" size="2x" />
      </div>
      <h2 className='text-2xl text-white mt-4'>Android Developer</h2>
      <h3 className='text-2xl text-white mt-2'>Johnson & Johnson</h3>
      <p className='text-xl text-white mt-8'>I am an Android Developer</p>

      <div className='flex justify-center gap-48 mt-12 relative'>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-400" size="2x" />
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faMapLocation} className="text-gray-400" size="2x" />
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-gray-400" />
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faTwitch} size="2x" className="text-gray-400" />
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faDiscord} size="2x" className="text-gray-400" />
        </div>

        <button className="absolute right-[-20px] mt-24 rounded-full bg-blue-800 text-white p-4 shadow-lg">
          <FontAwesomeIcon icon={faThLarge} size="2x" />
        </button>
      </div>

      <div className='flex mt-6 justify-center gap-48'>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-gray-400" />
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPinterest} size="2x" className="text-gray-400" />
        </div>
      </div>

      
<div className='flex justify-around items-center mt-12 gap-16 w-full px-96'>

  <div className='flex items-center'>
    <div className="w-[60px] h-[60px] rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500">
      <FontAwesomeIcon icon={faMailBulk} size="2x" className="text-white" />
    </div>
    <div className="ml-4">
      <p className="text-white font-bold">Email</p>
      <p className="text-white">jimmy@hotmail.com</p>
    </div>
  </div>

  <div className='flex items-center'>
    <div className="w-[60px] h-[60px] rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500">
      <FontAwesomeIcon icon={faMobile} size="2x" className="text-white" />
    </div>
    <div className="ml-4">
      <p className="text-white font-bold">Mobile Number</p>
      <p className="text-white">jimmy@hotmail.com</p>
    </div>        
  </div>
</div>


<div className='flex justify-around items-center mt-12 gap-16 w-full px-80'>

  <div className='flex items-center'>
    <div className="w-[60px] h-[60px] rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500">
      <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="text-white" />
    </div>
    <div className="ml-4">
      <p className="text-white font-bold">Date of Birth</p>
      <p className="text-white">2022-01-20</p>
    </div>
  </div>

  <div className='flex items-center'>
  <div className="w-[60px] h-[60px] rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500">
  <FontAwesomeIcon icon={faLocationPin} size="2x" className="text-white" />
    </div>
    <div className="ml-4">
      <p className="text-white font-bold">Address</p>
      <p className="text-white">Iceland</p>
    </div>        
  </div>
</div>
<div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-4 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<h1 className='text-4xl text-white mt-8'>QR Code</h1>
<div className="flex justify-center items-center mt-14">
<div className="bg-white p-10 w-[500px] rounded-lg shadow-lg flex flex-col items-center">
<div className="flex flex-row justify-center items-center gap-32">
<div className="w-[120px] h-[120px]">
        <Image src={qr} alt="QR" />
      </div>  
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
        <Image src={man} alt="Profile Image" />
      </div>     
    </div>
</div>    
</div>
<div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex justify-center mt-8">
        <button
          className="px-8 py-2 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2"
          style={{ backgroundColor: colors.primary }}
        >
          <FontAwesomeIcon icon={faContactBook} />
          Add to contact
        </button>
      </div>
    </div>
  );
}
