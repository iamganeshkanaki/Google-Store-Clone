import React from 'react'
import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Phones.module.scss'
import Image from 'next/image'
import { Button } from 'antd';
import PhonesAccordian from '../../../components/PhonesAccordian';
import Footer from '../../../components/Footer';

const data = [
  {
    id: 1,
    image: '/Images/Phones/pixel8.webp',
    text: 'Pixel 8',
  },
  {
    id: 2,
    image: '/Images/Phones/pixel8pro.webp',
    text: 'Pixel 8 Pro',
  },
  {
    id: 3,
    image: '/Images/Phones/pixel7a.webp',
    text: 'Pixel 7a',
  },
  {
    id: 3,
    image: '/Images/Phones/pixel7pro.webp',
    text: 'Pixel 7 Pro',
  },
  {
    id: 3,
    image: '/Images/Phones/pixel7.webp',
    text: 'Pixel 7',
  },

  {
    id: 3,
    image: '/Images/Phones/pixelcases.webp',
    text: 'Pixel Cases',
  },
  {
    id: 3,
    image: '/Images/Phones/accessories.webp',
    text: 'Accessories',
  },
];


const shapesinfo = [
  {
    id: 1,
    image: '/Images/Phones/Svg/assistant.svg',
    text: 'Get more done throughout your day.',
    description:'With Google Assistant and your go-to apps already there, Pixel helps you to screen calls, get answers and more.'
  },
  {
    id: 2,
    image: '/Images/Phones/Svg/google.svg',
    text: 'Security that you can count on.',
    description:'With Google Tensor G3 and the Titan M2 security chip, Pixel is built with multiple layers of security to help keep your personal info safe.'
  },
  {
    id: 3,
    image: '/Images/Phones/Svg/newfeatures.svg',
    text: 'Enjoy new features every few months.',
    description:'Pixel gets regular Feature Drops – software updates that improve the camera, battery and more.'
  },
];


export default function page() {

  return (
    <div>
      <Navbar />
      <div className={styles.Phones_Container}> 
      <h3 className={styles.Phones_Container_Heading}> Pixel. The only phone engineered <br /> by Google. </h3>
      </div>
      <div className={styles.Phones_Container_Card}>
        
        {data.map(item => (
        <div key={item.id}>
          <Image
          src={item.image}
          width={170}
          height={170}
          />
          <p className={styles.Phones_Container_Card_Text}>{item.text}</p>
          
        </div>
      ))}
        </div>

        <div className={styles.Phones_Container_Difference}>
 
        <Image
          src="/Images/Phones/pixel7prodiff.webp"
          width={300}
          height={250}
          style={{borderRadius:'25px'}}
          />
           <Image
          src="/Images/Phones/pixel7diff.webp"
          width={300}
          height={250}
          style={{borderRadius:'25px'}}
          />
        
        </div>
        <div className={styles.Phones_Container_Buttons}> 
        <Button type="primary" style={{fontWeight:'700',width:'130px'}}>Learn More</Button>
        <Button type="primary"  style={{fontWeight:'700',width:'130px'}}>Learn More</Button>
        </div>

        <div className={styles.Phones_Container_TextInfo}> 
        <h2 style={{fontSize:'40px'}}> Super helpful. In so many ways. </h2>
        <h3 style={{fontSize:'16px',lineHeight:'25px',marginTop:'-15px'}}> Using Google AI, Pixel makes it easy to create amazing photos and <br /> videos, manage daily to-dos and keep your info safe. </h3>
        </div>

        <div className={styles.Phones_Container_Shapes}>
                  {shapesinfo.map(item => (
                  <div key={item.id} className={styles.Phones_Container_Shapes_Rectangle}>
                  <div className={styles.Phones_Container_Shapes_Rectangle_Data}>
                  <Image
                  src={item.image}
                  width={40}
                  height={40}
                  />
                  <p style={{width:'250px',fontWeight:'700',fontSize:'24px'}}>{item.text}</p>
                  <p style={{width:'240px',fontSize:'17px',marginTop:'-5px',fontWeight:'500'}}> {item.description}</p>
                  </div>
                  </div>
                  ))}

        </div>

        <div className={styles.Phones_Container_ImgText}>
          <Image
          src="/Images/Phones/user.webp"
          height={450}
          width={350}
          style={{borderRadius:'25px'}}
          />
          <div className={styles.Phones_Container_ImgText_Shape}>
            <div className={styles.Phones_Container_ImgText_Shape_Content}> 
            <h2 style={{fontSize:'30px'}}> Switching to Pixel is easy. </h2>
            <p style={{fontSize:'15px',width:'500px',lineHeight:'25px',marginTop:'-10px',fontWeight:'500'}}> Seamlessly transfer your contacts, photos, messages and more. It comes with all your favourite Google apps. Plus, Pixel works well with compatible devices, even ones from another brand. </p>
            <button style={{width:'150px',height:'35px',backgroundColor:'#d8eaff',fontSize:'17px',fontWeight:'700',borderRadius:'5px'}}> Switch to Pixel </button>
            </div>
          </div>
        </div>
        <h3 style={{display:'flex',justifyContent:'center',fontSize:'40px',color:'darkslategray'}}> The perfect companions. </h3>
        <a href="https://store.google.com/collection/accessories_wall?hl=en-GB" style={{display:'flex',justifyContent:'center',textDecoration:'none',marginTop:'-25px',fontSize:'17px',fontWeight:'700'}}> Browse all accessories </a>
        <div className={styles.Phones_Container_Pixelback}> 
        <Image
        src="/Images/Phones/Pixelback.webp"
        width={450}
        height={250}
        style={{borderRadius:'10px'}}
        />
        <div className={styles.Phones_Container_Pixelback_Shapes}>
                    <div className={styles.Phones_Container_Pixelback_Shapes_Data}>
                      <h2 style={{fontSize:'35px'}}> Cases and protection. </h2>
                      <button style={{width:'100px',height:'35px',fontSize:'17px',fontWeight:'700',borderRadius:'5px'}}> Browse </button>
                    </div>
        </div>
        </div>
        <div className={styles.Phones_Container_FooterRect}>
          <div className={styles.Phones_Container_FooterRect_Rect}>
            <div className={styles.Phones_Container_FooterRect_Rect_Data}> 
                    <Image
                    src="Images/Phones/Svg/Home.svg"
                    width={40}
                    height={40}
                    style={{marginLeft:'420px',marginTop:'40px'}}
                    />
                    <h2> Google Pixel Walk-in Centres. </h2>
                    <a href="https://store.google.com/collection/accessories_wall?hl=en-GB" style={{display:'flex',justifyContent:'center',textDecoration:'none',marginTop:'-5px',fontSize:'17px',fontWeight:'700'}}> Learn more </a>
                    </div>
          </div>
        </div>

        <h2 style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginLeft:'300px',marginTop:'50px',width:'300px',fontSize:'30px',lineHeight:'45px'}}> Frequently asked questions </h2>
        <PhonesAccordian />
        <Footer />
    </div>
  )
}
