"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faChevronDown,
  faCheckCircle,
  faMapLocation,
  faMailBulk,
  faBirthdayCake,
  faPhone,
  faContactBook,
  faLocationDot,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import man from '../assets/man.jpg';
import { faFacebook, faLinkedinIn, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import the X Twitter icon
import cloud from '../assets/cloud.jpeg';

const colors = {
    primary: "#DB2777",
    background: "#f3f4f6", 
    textSecondary: "#6b7280", 
    white: "#ffffff", 
  };
  
export default function Home() {
  return(
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: colors.background }}>
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: `url(${cloud.src})`,
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

        <div className="absolute w-full flex justify-center bottom-[-80px]">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4" style={{ borderColor: colors.white }}>
            <Image src={man} alt="man" />
          </div>
        </div>
      </div>

      <div className='mt-24 text-center flex items-center'>
        <h1 className='text-4xl text-black font-bold'>Akio Sharma</h1>
        <FontAwesomeIcon icon={faCheckCircle} className="text-pink-600 ml-2" size="2x" />
      </div>
      <h2 className='text-2xl text-black mt-4' style={{ color: colors.textSecondary}}>Quality Assurance</h2>
      <p className='text-md text-black mt-14' style={{ color: colors.textSecondary}}>
        Quality Assurance (QA) refers to the systematic process and activities that ensure a product or 
        service meets specified requirements and standards. In various industries, QA is implemented to
        guarantee the quality of processes, products, and Services
      </p>


      <div className='flex justify-center gap-6 mt-16'>
        <div className='w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faMapLocation} size="lg" className="text-white" />
        </div>
        <div className='w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-white" />
        </div>
        <div className='w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white" />
        </div>
        <div className='w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faYoutube} size="lg" className="text-white" />
        </div>
      </div>

      <div className='flex justify-center gap-6 mt-6'>
        <div className="w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-white" />
        </div>
        <div className="w-[50px] h-[50px] bg-pink-500 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-12 w-1/8'>
        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
       
          <FontAwesomeIcon icon={faMailBulk} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-pink-500 font-semibold">akio@gmail.com</p>
          </div>
        </div>
        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
          <FontAwesomeIcon icon={faMailBulk} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Alternate Email</p>
            <p className="text-pink-500 font-semibold">akios@gmail.com</p>
          </div>
        </div>
        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Mobile Number</p>
            <p className="text-pink-500 font-semibold">+91 98456767</p>
          </div>
        </div>

        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Alternate Mobile Number</p>
            <p className="text-pink-500 font-semibold">+91 9887574587</p>
          </div>
        </div>
        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
          <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Date of Birth</p>
            <p className="text-pink-500 font-semibold">20/04/1992</p>
          </div>
        </div>
        <div className='flex items-start bg-white shadow-lg p-4 rounded-lg items-center'>
          <FontAwesomeIcon icon={faLocationDot} size="2x" className="text-pink-500 mr-4" />
          <div>
            <p className="text-gray-500">Address</p>
            <p className="text-pink-500 font-semibold">UK</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-6 mt-8'>
 <button className='relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 shadow-lg font-bold flex items-center justify-center'
    style={{
      borderTopLeftRadius: '0', 
      borderBottomLeftRadius: '0', 
      borderTopRightRadius: '0', 
      borderBottomRightRadius: '50px', 
    }}
  >
    QR Code
  </button>

  <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
    <FontAwesomeIcon icon={faContactBook} />
    Add to contact
  </button>
</div>

    </div>
  );
}

