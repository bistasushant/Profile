"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faChevronDown,
  faCheckCircle,
  faMapLocation,
  faEnvelope,
  faMailBulk,
  faBirthdayCake,
  faPhone,
  faTty,
  faLocation,
  faContactBook,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import man from '../assets/man.jpg';
import { faFacebook, faLinkedinIn, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import back from '../assets/back.jpeg';
import qr from '../assets/qr.png'

const colors = {
  primary: "#F33535",
  background: "#f3f4f6", 
  textSecondary: "#6b7280", 
  white: "#ffffff", 
};

export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: colors.background }}
    >
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: `url(${back.src})`,
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

        <div className="absolute bottom-[-10px] left-0 ml-80">
          <div
            className="w-[160px] h-[160px] rounded-full overflow-hidden border-4"
            style={{ borderColor: colors.white }}
          >
            <Image src={man} alt="man" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className='mt-2 ml-6 flex'>
          <h1 className='text-4xl font-bold'>Belvedere Devid</h1>
          <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 ml-2" size="2x" />
        </div>
        <h2 className='text-2xl mt-1 ml-6' style={{ color: colors.textSecondary }}>Fashion Designer</h2>
        <h3 className='text-xl mt-14 ml-6 '>Ajilia Tech</h3>
        <p className="text-md mt-14 ml-6">
          A fashion designer is a professional who creates clothing, accessories, and footwear designs. These
          designers are responsible for conceptualizing and creating aesthetically pleasing and functional garments.
        </p>
        <div className='flex gap-48 mt-8 ml-8 relative'>
          <FontAwesomeIcon icon={faMapLocation} className="text-blue-600" size="2x" />
          <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-black-600" />
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600" />
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-blue-600" />
          <button className="absolute right-[20px] mt-24 rounded-full bg-red-500 text-white p-4 shadow-lg">
            <FontAwesomeIcon icon={faThLarge} size="2x" />
          </button>
        </div>
        <div className='mt-6 ml-8'>
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-600" />
        </div>

        <div className='flex mt-16 ml-6 gap-4 items-center'>
          <FontAwesomeIcon icon={faMailBulk} size="2x" className="text-red-500" />
          <p>Belvedere@gmail.com</p>
        </div>
        <div className='flex mt-4 ml-6 gap-6 items-center'>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-red-500" />
          <p>Belvederedwev@gmail.com</p>
        </div>
        <div className='flex mt-4 ml-6 gap-6 items-center'>
          <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="text-red-500" />
          <p>26/08/1991</p>
        </div>
        <div className='flex mt-4 ml-6 gap-4 items-center'>
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-red-500" />
          <p>+91 8452525210</p>
        </div>
        <div className='flex mt-4 ml-6 gap-4 items-center'>
          <FontAwesomeIcon icon={faTty} size="2x" className="text-red-500" />
          <p>+91 8452525210</p>
        </div>
        <div className='flex mt-4 ml-6 gap-4 items-center'>
          <FontAwesomeIcon icon={faLocation} size="2x" className="text-red-500" />
          <p>Catalonia, USA</p>
        </div>

      
        <div className="flex justify-center items-center mt-14">
          <div className="bg-white p-10 w-[500px] rounded-lg shadow-lg flex flex-col items-center">
           
            <h1 className='text-center text-2xl font-medium mb-6'>
              QR Code
            </h1>

    
            <div className="flex flex-row justify-center items-center gap-32">
             
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <Image src={man} alt="Profile Image" />
              </div>
              <div className="w-[120px] h-[120px]">
                <Image src={qr} alt="QR" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="px-8 py-2 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: colors.primary }}
          >
            <FontAwesomeIcon icon={faContactBook} />
            Add to contact
          </button>
        </div>
      </div> 
    </div>
  );
}
    