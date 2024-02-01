'use Client';
import React from 'react'
import Navbar from '../../../components/Navbar'
import Header from '../../../components/Header'
import Image from 'next/image'
import { Button } from 'antd'
import { Tabs } from 'antd';
import Footer from '../../../components/Footer';


const handleTabs = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Detect potential signs of stress.',
    children: 'With body response tracking and notifications, get help identifying possible signs of stress, so you can manage it in the moment.Bands shown may be sold separately and may not be available in all countries',
  },
  {
    key: '2',
    label: 'Take simple steps to manage it.',
    children: 'Get on-wrist and Fitbits in-app tools, like guided breathing sessions, to help in a way thats best for you.',
  },
  {
    key: '3',
    label: 'Reflect on your routine.',
    children: 'Look back on your day or week to discover patterns so that you can adjust your routine to help manage stress.',
  },
];

const page = () => {

  const data = [
    { text: 'Detect stress and learn how to manage it.', image: '/Images/Watches/toy1.svg' },
    { text: 'Feel more at ease with Safety Check.', image: '/Images/Watches/toy2.svg' },
    { text: 'Just say Hey Google for hands-free help.', image: '/Images/Watches/toy3.svg' },
    // Add more items as needed
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <h2 style={{fontSize:'20px',marginLeft:'230px',marginTop:'-20px'}}> Google Pixel Watch 2 </h2>
      <Button type='primary' style={{marginTop:'-285px',fontWeight:'bold',marginLeft:'1150px'}}>
            Find Retailers
        </Button>
      <div style={{backgroundColor:'#E4EEFD',width:'1050px',height:'430px',marginLeft:'230px',borderRadius:'15px',marginTop:'10px'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:'15px',marginRight:'15px'}}> 
        
      
        <Image
        src="/Images/Watches/divwatch2.jpg"
        width={330}
        height={410}
        style={{borderRadius:'15px',marginTop:'10px'}}
        />
          <Image
        src="/Images/Watches/divwatch3.png"
        width={330}
        height={410}
        style={{borderRadius:'15px',marginTop:'10px'}}
        />
        <Image
        src="/Images/Watches/redwatch.png"
        width={330}
        height={410}
        style={{borderRadius:'15px',marginTop:'10px'}}
        />
        
        </div>
      </div>
      

      <div style={{backgroundColor:'#E4EEFD',width:'970px',height:'100px',marginTop:'50px',marginLeft:'285px',borderRadius:'15px'}}>
        <Image
        src="/Images/Watches/smartwatch.png"
        width={50}
        height={50}
        style={{marginTop:'25px',marginLeft:'80px'}}
        />
        <div style={{display:'flex',flexDirection:'column',marginTop:'-80px'}}> 
        <h2 style={{marginLeft:'150px',color:'darkslategray'}}> Six months of Fitbit Premium. </h2>
        <h3 style={{marginTop:'-15px',marginLeft:'150px',fontSize:'16px'}}> Get exclusive workouts led by expert trainers, mindfulness sessions and more. </h3>
        </div>
      </div>
      <div style={{backgroundColor:'#E4EEFD',width:'970px',height:'100px',marginTop:'30px',marginLeft:'285px',borderRadius:'15px'}}>
      <Image
        src="/Images/Watches/video-streaming.png"
        width={50}
        height={50}
        style={{marginTop:'25px',marginLeft:'80px'}}
        />
        <div style={{display:'flex',flexDirection:'column',marginTop:'-80px'}}> 
        <h2 style={{marginLeft:'150px',color:'darkslategray'}}> 1 month of YouTube Music Premium. </h2>
        <h3 style={{marginTop:'-15px',marginLeft:'150px',fontSize:'16px'}}> Listen to over 100 million songs ad-free and download favourites to your watch. </h3>
        </div>
      </div>
      <h2 style={{marginLeft:'450px',marginTop:'70px',width:'600px',textAlign:'center'}}> Personalised help for your health, safety, and productivity. </h2>
      <a href='https://store.google.com/product/pixel_watch_2?hl=en-GB&modal=google-pixel-watch-2' style={{textAlign:'center',marginLeft:'695px',textDecoration:'none',fontWeight:'700',color:'blue'}}> Explore in 3D <span style={{fontSize:'20px'}}> &#10555; </span> </a>

      <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'20px',marginTop:'50px'}}> 
        <div style={{backgroundColor:'#d8e5ff',width:'460px',height:'600px',borderRadius:'15px'}}>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'200px'}}> 
          <Image
          src="/Images/Watches/smartwatchlogo.png"
          width={60}
          height={60}
          />
          <h2 style={{width:'400px',textAlign:'center',fontSize:'25px'}}> Three all-new sensors for more precise info. </h2>
          <h3 style={{width:'500px',fontSize:'14px',textAlign:'center',marginTop:'-5px'}}> Track heart rate, skin temperature and signs of stress. </h3>
          </div>
          </div>
          <video autoPlay controls  style={{borderRadius:'15px',width:'460px',backgroundColor:'#d8e5ff'}}>
      <source src="/Images/Watches/watch1.webm" type="video/webm" />
    </video>
      </div>
      </div>

      <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'20px',marginTop:'30px'}}> 
        <Image 
        src="/Images/Watches/runwatch.webp"
        width={460}
        height={600}
        style={{borderRadius:'15px'}}
        />
        <div style={{backgroundColor:'#d8e5ff',width:'460px',height:'600px',borderRadius:'15px'}}>
          
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'200px'}}> 
          
          <Image
          src="/Images/Watches/heart.svg"
          width={55}
          height={55}
          />
          <h2 style={{width:'450px',textAlign:'center',fontSize:'22px',color:'black'}}> 
Up to 40% more accurate heart rate tracking during vigorous activities like spinning. </h2>
          </div>
          </div>
       
      </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'20px',gap:'20px'}}> 
      {data.map((item, index) => (
        <div style={{backgroundColor:'#d8e5ff',width:'300px',height:'300px',borderRadius:'15px'}}> 
        <div key={index} >

          <img src={item.image} alt={`Image for ${item.text}`} style={{marginLeft:'130px',marginTop:'100px'}}/>
          <p style={{fontSize:'18px',fontWeight:'700',color:'darkslategray',width:'300px',textAlign:'center'}}>{item.text}</p>
        </div>
        </div>
      ))}
    
      </div>

      <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'20px',marginTop:'20px'}}>
        <Image
        src="/Images/Watches/watchpart.webp"
        width={460}
        height={600}
        style={{borderRadius:'15px'}}
        />
        <div style={{backgroundColor:'#d8e5ff',width:'460px',height:'600px',borderRadius:'15px'}}>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'200px'}}> 
          <Image
          src="/Images/Watches/battery.svg"
          width={60}
          height={60}
          />
          <h2 style={{width:'400px',textAlign:'center',fontSize:'26px',color:'darkslategray'}}> An enhanced 24-hour battery with always-on display and faster charging. </h2>
         
          </div>
          </div>
         
      </div>
      </div>

      <div style={{display:'flex',flexDirection:'column',textAlign:'center',marginTop:'50px'}}>
        <h4> Health and fitness </h4>
        <h1 style={{fontSize:'60px',marginTop:'-10px',color:'darkslategray'}}> Turn insights into improvements. </h1>

        <Image
        src="/Images/Watches/waterwatch.jpg"
        width={1300}
        height={700}
        style={{marginLeft:'100px',borderRadius:'20px'}}
        />
      </div>
      <h2 style={{fontSize:'30px',width:'600px',textAlign:'center',marginLeft:'450px',marginTop:'70px'}}> A little help keeping your stress in check. </h2>
      <video autoPlay controls  style={{borderRadius:'15px',width:'1060px',backgroundColor:'#d8e5ff',marginLeft:"220px"}}>
      <source src="/Images/Watches/wear.mp4" type="video/mp4" />
    </video>
    <div style={{marginLeft:'300px',marginTop:'50px',fontSize:'30px',marginRight:'410px'}}> 
    <Tabs defaultActiveKey="1" items={items} style={{marginLeft:'100px',fontSize:'18px',textAlign:'center',fontWeight:'600'}} size='large' />
    </div>

    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'20px',marginTop:'50px'}}> 
        
        <div style={{backgroundColor:'white',width:'460px',height:'600px',borderRadius:'15px'}}>
          
          <div style={{display:'flex',flexDirection:'column',alignItems:'left',marginTop:'150px',marginLeft:'10px'}}> 
          
          <Image
          src="/Images/Watches/assist.svg"
          width={50}
          height={50}
          />
          <h2 style={{width:'400px',fontSize:'30px',color:'darkslategray',fontWeight:'700',lineHeight:'35px'}}> 
          Do more and learn more, hands-free. </h2>
          <h3 style={{width:'400px',color:'grey',marginTop:'-10px',lineHeight:'30px'}}> With Google Assistant, just say "Hey Google" to discover stats related to your health and fitness – using your voice </h3>
          <h4 style={{marginTop:'10px',fontSize:'13px'}}> Band shown may be sold separately. </h4>
          </div>
          </div>
          <Image 
        src="/Images/Watches/watchuser.webp"
        width={470}
        height={600}
        style={{borderRadius:'15px'}}
        />
       
      </div>
      </div>
<Footer />
     
    </div>
  )
}

export default page
