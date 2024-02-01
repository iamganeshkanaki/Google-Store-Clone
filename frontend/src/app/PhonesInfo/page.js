import React from 'react'
import Navbar from '../../../components/Navbar'
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Carousel effect="fade" autoplay>
    <div>
   
      <Image
      src="/Images/PhonesInfo/Pixel7a/slide1.webp"
      width={1000}
      height={500}
      style={{marginLeft:'240px',marginTop:'50px'}}
      />
    </div>
    <div>
    <Image
      src="/Images/PhonesInfo/Pixel7a/slide1.webp"
      width={1000}
      height={500}
      style={{marginLeft:'240px',marginTop:'50px'}}
      />
    </div>
    <div>
    <Image
      src="/Images/PhonesInfo/Pixel7a/slide1.webp"
      width={1000}
      height={500}
      style={{marginLeft:'240px',marginTop:'50px'}}
      />
    </div>
    <div>
    <Image
      src="/Images/PhonesInfo/Pixel7a/slide1.webp"
      width={1000}
      height={500}
      style={{marginLeft:'240px',marginTop:'50px'}}
      />
    </div>
  </Carousel>
    </div>
  )
}

export default page
