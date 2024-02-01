import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />
      <h2 style={{fontSize:'35px',textAlign:'center',marginTop:'100px', color:'darkslategray'}}> Find your fit. </h2>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'50px',marginTop:'50px'}}> 
      <Image
      src='/Images/earbuds/pixelbudspro.webp'
      width={280}
      height={250}
      />
      <Image
      src='/Images/earbuds/pixelbudsa.png'
      width={310}
      height={260}
      />
      </div>

      <div style={{display:'flex',flexDirection:'column',marginLeft:'510px',gap:'10px'}}>
        <h3> Pixel Buds Pro </h3>
        <button style={{width:'130px',height:'32px',backgroundColor:'#1667D2',color:'white',borderRadius:'5px',fontWeight:'700',marginTop:'1px',border:'1px solid white'}}> Find Retailers </button>
        <a style={{color:'blue',fontSize:'14px',fontWeight:'700',marginLeft:'25px'}}> Learn more </a>
        <h4 style={{fontSize:'17px',marginLeft:'-50px'}}> Premium sound, pristine calls </h4>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'840px',gap:'10px',marginTop:'-210px'}}>
        <h3> Pixel Buds A-Series </h3>
        <button style={{width:'130px',height:'32px',backgroundColor:'#1667D2',color:'white',borderRadius:'5px',fontWeight:'700',marginTop:'1px',border:'1px solid white',marginLeft:'25px'}}> Find Retailers </button>
        <a style={{color:'blue',fontSize:'14px',fontWeight:'700',marginLeft:'45px'}}> Learn more </a>
        <h4 style={{fontSize:'17px',marginLeft:'10px'}}> Rich Sound,Always </h4>
        
      </div>
      <hr style={{width:'800px',textAlign:'center'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Active Noise Cancellation with Silent Seal </h3>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'350px',fontSize:'14px'}}>
        <h3> Yes </h3>
        <h3> No </h3>
      </div>
      <hr style={{width:'800px',textAlign:'center'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Earbud Listening Time </h3>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'460px',fontSize:'14px'}}>
        <h3> Up to 11 hours without ANC </h3>
        <h3 style={{marginTop:'-10px'}}> Up to seven hours with ANC </h3>
      </div>
      <h3 style={{marginLeft:'850px',marginTop:'-50px',fontSize:'15px',marginLeft:'900px'}}> Upto 5 hours </h3>
      <hr style={{width:'800px',textAlign:'center',marginTop:'50px'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Call Clarity </h3>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'460px',fontSize:'14px',fontWeight:'400px'}}>
        <h3> Bluetooth Super Wideband </h3>
        <h3 style={{marginTop:'1px'}}> Clear calling </h3>
        <h3 style={{marginTop:'-3px'}}> Beamforming microphones </h3>
        <h3 style={{marginTop:'-1px'}}> Voice accelerometer </h3>
        <h3 style={{marginTop:'1px'}}> Wind-blocking mesh covers </h3>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'860px',fontSize:'14px',marginTop:'-200px'}}>
        <h3> Up to 11 hours without ANC </h3>
        <h3 style={{marginTop:'-10px'}}> Up to seven hours with ANC </h3>
      </div>
   
      <hr style={{width:'800px',textAlign:'center',marginTop:'140px'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Transperancy Mode </h3>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'350px',fontSize:'14px'}}>
        <h3> Yes </h3>
        <h3> No </h3>
      </div>
      <hr style={{width:'800px',textAlign:'center',marginTop:'40px'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Multi-point Connectivity with device charging </h3>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'350px',fontSize:'14px'}}>
        <h3> Yes </h3>
        <h3> No </h3>
      </div>
      <hr style={{width:'800px',textAlign:'center',marginTop:'40px'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Wireless charging </h3>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'350px',fontSize:'14px'}}>
        <h3> Yes </h3>
        <h3> No </h3>
      </div>
      <hr style={{width:'800px',textAlign:'center',marginTop:'40px'}}/>
      <h3 style={{display:'flex',flexDirection:'row',marginLeft:'350px',marginTop:'30px',fontSize:'16px',fontWeight:'500'}}> Google Assistant </h3>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'350px',fontSize:'14px'}}>
        <h3> Yes </h3>
        <h3> Yes </h3>
      </div>
      <hr style={{width:'800px',textAlign:'center',marginTop:'40px'}}/>
      <Footer />
    </div>
  )
}

export default page
