import React from 'react';
import { Collapse } from 'antd';
import styles from './../styles/Phones.module.scss'
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'What can I transfer from my old phone?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Are Google apps better on a Pixel?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Is it difficult to transfer data from my old phone to Pixel?',
    children: <p>{text}</p>,
  },
];
const PhonesAccordian = () => 
<div className={styles.PhonesAccordian_Header}> 
<
    Collapse defaultActiveKey={['']} ghost items={items} style={{fontSize:'18px'}} 
/>
</div>
export default PhonesAccordian;