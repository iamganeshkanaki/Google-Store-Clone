import React from "react";
import {Card, CardFooter} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import styles from '../../../styles/Products.module.scss'
import { Button, Popover } from 'antd';
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const data = [
    {
      id: 1,
      image: '/Images/accessories/pixel7acase.png',
      text: 'Pixel 7a Case',
    },
    {
      id: 2,
      image: '/Images/accessories/adaptor.png',
      text: 'Adaptor 30W',
    },

    {
        id: 3,
        image: '/Images/accessories/pixel8procase.png',
        text: 'Pixel 8 Pro',
    },

    {
        id: 4,
        image: '/Images/accessories/pixel8case.png',
        text: 'Pixel 8',
    },

    {
        id: 5,
        image: '/Images/accessories/pixelwatchcable.png',
        text: 'Watch Cable',
    },


    
    // Add more objects as needed
  ];


  const content = (
    <div>
      <p>Pixel 7a</p>
      <p>Content</p>
    </div>
  );

export default function App() {



  return (
    <div> 
        <Navbar />
        <Header />
        <h2 style={{fontSize:'25px',color:'darkslategray',marginLeft:'150px',marginTop:'-10px'}}> Accessories </h2>
        
      <div className={styles.Product_Container}> 
     <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', gap:'20px', marginLeft:'50px',width:'1500px' }}>
    {data.map((item) => (
        <div key={item.id} style={{display:'flex', flexDirection:'row', flexWrap:'wrap',border:'3px solid white',borderRadius:'20px'}} >

    <Card
     
    >
      <div className={styles.zoomwrapper}> 
      <Image
        alt="Woman listing to music"
        height={320}
        src={item.image}
        width={340}
        loading="lazy"  
      />
      </div>
    
      <CardFooter>
        <p style={{marginLeft:'70px', fontSize:'18px', fontWeight:'700', fontFamily:'Open Sans'}} >{item.text} </p> 
        
      </CardFooter>
  
      <Popover content={content} title="Specifications">
  
    <div style={{marginLeft:'250px', marginTop:'-45px'}}> 
  
  <Image
    src="Images/online-shop.png"
    width={30}
    height={30}
    className={styles.Product_Container_Addcart}
    />
 
  </div>
  </Popover>
     
      <div style={{display:'flex',flexDirection:'row',marginLeft:'55px',marginTop:'15px'}}> 
      <button style={{width:'115px',height:'34px',border:'2px solid white',backgroundColor:'white',fontSize:'15px',fontWeight:'700'}}> Add to cart </button>
      <button style={{width:'115px',height:'34px',border:'2px solid white',backgroundColor:'#fecd06',fontSize:'14px',fontWeight:'700'}}> Buy now </button>
      </div>
    </Card>
    
    </div>
      ))}
      </div>
      
      </div>
      <Footer />
    </div>
  );
}
