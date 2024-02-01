import React from 'react'
import styles from '.././styles/Footer.module.scss';

const data = [
  {
    id: 1,
    text: 'Common criteria certification for hardware and cryptographic library. See g.co/pixel/certifications for details.',
  },
  {
    id: 2,
    text: 'Pixel updates for seven years from when the device first became available on the Google Store in the US. See g.co/pixel/updates for details.',
  },
  {
    id: 3,
    text: 'Pixel 8 and Pixel 8 Pro: Screen has rounded corners. When measured diagonally as a rectangle, screen is 6.2 inches (for Pixel 8) and 6.7 inches (for Pixel 8 Pro). Actual viewable area is less. Dimension may vary by configuration and manufacturing process.',
  },
  {
    id: 4,
    text: 'Pixel 8 Pro and Pixel 8: Not available for all camera apps or modes. Pixel 7a, Pixel 7, Pixel 7 Pro, Pixel 6a: Maximum resolution and field of view with RAW image files setting turned on. Setting is turned off by default. See g.co/pixel/photoediting for more information.',
  },
  {
    id: 5,
    text: 'Estimate of typical capacity based on testing and expected mobile behaviour.',
  },
  {
    id: 6,
    text: 'Pixel 8 Pro and Pixel 8: Wireless charging rates up to18 W (Pixel 8) and up to 23W (Pixel 8 Pro) charging with Google Pixel Stand (2nd gen) (sold separately). Up to 12W with Qi-certified EPP chargers (sold separately). Actual results may be slower.',
  },
  {
    id: 7,
    text: 'Pixel 8 Pro and Pixel 8: Designed to charge Qi-certified devices. Use of reverse wireless charging significantly reduces Pixel battery life. Cases may interfere with charging and will reduce charging speed. Charge speeds may vary. See g.co/pixel/wirelesscharging for more information.',
  },
  {
    id: 8,
    text: 'Call quality depends on signal strength, environment, network traffic and many other factors. Actual results may vary.',
  },
  {
    id: 9,
    text: 'Some third-party apps and data may not be transferred automatically. Visit g.co/pixel/copydatahelp for information.',
  },
  {
    id: 10,
    text: 'Based on wired data transfers.',
  },

];

const Footer = () => {
  return (
    <div>
      
      <div style={{display:'flex',flexDirection:'column',marginLeft:'100px',width:'1300px',fontSize:'12px',lineHeight:'15px',marginTop:'50px'}}> 
      {data.map(item => (
        <div key={item.id} style={{justifyContent:'center'}}>
            <ul> 
            <li> {item.text} </li>
            </ul>
        </div>
      ))}
      </div>

      
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginRight:'100px',gap:'30px',fontSize:'14px',fontWeight:'500'}}>
        <p> Country availability </p>
        <p> Help Centre </p>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginRight:'100px',gap:'30px',fontSize:'14px',fontWeight:'500'}}>
        <p> Pixel walk-in centres </p>
        <p> Contact us </p>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginRight:'80px',gap:'30px',fontSize:'14px',fontWeight:'500'}}>
        <p> Disability support </p>
        <p> Device recycling </p>
      </div>

      <hr style={{width:'1400px'}}/>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginRight:'100px',fontSize:'13px',gap:'40px'}}>
        <p> India </p>
        <p> Privacy </p>
        <p> Google Nest Commitment to Privacy </p>
        <p> Sales Terms </p>
        <p> Terms of service </p>
      </div>
    </div>
  )
}

export default Footer
