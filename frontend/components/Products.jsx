import React, { useEffect, useState } from "react";
import { Card, CardFooter } from "@nextui-org/react";


import styles from '.././styles/Products.module.scss'
import { Popover } from 'antd';
import Link from "next/link";
import axios from 'axios';
import { Image } from "@nextui-org/react";
import AddtoCart from "./AddtoCart";
const imgPath = '/../public/DImages/';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:3001/getData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  

  return (
    <div>
      <div className={styles.Product_Container}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginLeft: '60px' }}>
          {data.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >

              <Card>
                <Link href="/PhonesInfo">
                  <div className={styles.zoomwrapper}>
                    <Image
                      alt="Path is incorrect."
                      height={310}
                      src={`/BImages/${item.imaOriName}`}
                      width={330}
                      loading="lazy"
                    />
                  </div>
                </Link>

                <CardFooter>
                  <p style={{ marginLeft: '70px', fontSize: '18px', fontWeight: '700', fontFamily: 'Open Sans' }} >{item.Pname} </p>
                </CardFooter>

                <Popover content={item.specifications} title="Specifications" style={{ fontSize: '22px' }}>
                  <Popover />
                  <div style={{ marginLeft: '250px', marginTop: '-45px' }}>
                    <Image
                      src="/Images/online-shop.png"
                      width={30}
                      height={30}
                      className={styles.Product_Container_Addcart}
                    />
                  </div>
                </Popover>

                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '55px', marginTop: '15px' }}>
                  <button style={{ width: '115px', height: '34px', border: '2px solid white', backgroundColor: 'white', fontSize: '15px', fontWeight: '700' }}> Add to cart </button>
                  <button style={{ width: '115px', height: '34px', border: '2px solid white', backgroundColor: '#fecd06', fontSize: '14px', fontWeight: '700' }}> Buy now </button>
                </div>
              </Card>
              {/* <img src="BImages/8proImg.png"  alt="Error"/> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
