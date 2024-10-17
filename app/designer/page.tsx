"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobe,
    faChevronDown,
    faCheckCircle,
    faMapLocation,
    faContactBook,
    faThLarge
  } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import qr from '../assets/qr.png'; 
import man from '../assets/man.jpg'; 
import background from '../assets/background.jpg'; 
import { faFacebook, faLinkedinIn, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import the X Twitter icon
import setting from '../assets/setting.jpeg';
import earth from '../assets/earth.png';

const colors = {
  primary: "#f5f7f9",
  background: "#7e82ec",
  textSecondary: "#6b7280",
  pink: "#f76ee4",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: colors.background }}>
   
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-5 right-10">
          <button className="px-6 py-3 rounded-md flex items-center gap-3" style={{ backgroundColor: colors.primary, color: colors.pink }}>
            <FontAwesomeIcon icon={faGlobe} size="lg" />
            <span>English</span>
            <FontAwesomeIcon icon={faChevronDown} size="lg" />
          </button>
        </div>
        <div className="absolute bottom-[-50px] left-80">
          <div className="w-[180px] h-[180px] rounded-4xl overflow-hidden border-4 border-white">
            <Image src={man} alt="profile picture" />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto">
    
        <div className="bg-gradient-to-r from-white via-transparent to-transparent p-12 mt-20 w-[500px] rounded-lg shadow-lg mx-auto flex flex-col items-center">
          <div className='flex'>
            <h1 className="text-3xl font-bold text-white">Deshal Chauhan</h1>
            <FontAwesomeIcon icon={faCheckCircle} className="text-white ml-2" size="2x" />
          </div>
          <p className="text-white text-md">Designer</p>

          <div className="flex justify-center gap-8 mt-6">

            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faMapLocation} size="lg" className="text-white" />
            </div>
            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-white" />
            </div>
            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white" />
            </div>
            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faYoutube} size="lg" className="text-white" />
            </div>
            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white" />
            </div>
            <button className="absolute right-[80px] mt-24 rounded-full bg-pink-500 text-white p-4 shadow-lg">
            <FontAwesomeIcon icon={faThLarge} size="2x" />
          </button>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className='w-[40px] h-[40px] border-2 border-white rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
            </div>
          </div>

          <p className="text-white text-center mt-4">
            A fashion designer is a professional who creates clothing, accessories, and footwear designs. These designers are responsible
            for conceptualizing and creating aesthetically pleasing and functional garments.
          </p>
        </div>


        <div className="bg-pink-400 p-8 mt-12 w-[800px] rounded- shadow-lg mx-auto flex flex-col items-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">QR Code</h2>
          <div className="flex items-center gap-48">
            <div className="bg-white p-4 rounded-lg">
              <Image src={qr} alt="QR Code" width={150} height={150} />
            </div>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white">
              <Image src={man} alt="profile picture" />
            </div>
          </div>
        </div>

   
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 mt-12 w-full rounded-lg shadow-lg mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services</h2>
          <div className="flex justify-center gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-r from-white to-blue-500 w-[400px] h-[400px] rounded-lg shadow-lg flex flex-col items-center justify-center">
              <Image src={setting} alt="Setting" width={350} height={550} />
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-4">
                <FontAwesomeIcon icon={faContactBook} />
                Add to Contact
              </button>
            </div>
        
            <div className="bg-gradient-to-r from-white to-blue-500 w-[400px] h-[400px] rounded-lg shadow-lg flex flex-col items-center justify-center">
              <Image src={earth} alt="Earth" width={350} height={550} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
