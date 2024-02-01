'use client';

import Image from 'next/image'
import styles from '.././styles/Navbar.module.scss'
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import LoadingBar from 'react-top-loading-bar'
import { AudioOutlined } from '@ant-design/icons';
import Link from 'next/link';

import AddtoCart from './AddtoCart';




const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 20,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Navbar = () => {


  const [progress, setProgress] = useState(0)

  const handleNavClick = () => {
    setProgress(0); // Reset progress

    // Progress to 30
    setTimeout(() => {
      setProgress(40);

      // Wait for some time (e.g., 1000 milliseconds or 1 second)
      setTimeout(() => {
        // Progress to 100
        setProgress(100);
      }, 100);
    }, 0); // Set a small delay before starting the progress
  };
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  //Registration Code Starts from Here
  const [user, setUser] = useState({ fname: "", lname: "", phone: "", email: "", pass: "", cpass: "" });
  const [luser, lsetUser] = useState({ email: "", pass: "" });
  const handleChanges = e => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

  }

  const changesHandle = e => {
    const { name, value } = e.target;
    lsetUser({ ...luser, [name]: value });
  }

  const register = (e) => {
    e.preventDefault(); // Fix the typo here    
    console.log("User:", user);
    const { fname, lname, phone, email, pass, cpass } = user;
    console.log("Name:", fname);
    if ((fname && lname && phone && email && pass && cpass) && pass == cpass) {
      alert('Posted!');
      axios.post("http://127.0.0.1:3001/register", user);
    } else {
      console.log("received Data:", lname, phone, email, pass, cpass);
      alert('Invalid Data');
    }
  }


  const login = (e) => {
    e.preventDefault(); // Fix the typo here        
    const { email, pass } = luser;
    console.log("Data we got:", email, pass);
    if (!email || !pass) {
      alert('Invalid Data');
    } else {
      alert('Posted!');
      axios.post("http://127.0.0.1:3001/login", luser);
    }
  }

  //condition for check login or not.
 
 
  return (
    <div>
      <LoadingBar
        color='red'
        progress={progress}
        waitingTime={800}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={styles.Navbar_Container}>
        <div className={styles.Navbar_Container_Left}>
          <div className={styles.Navbar_Container_Left_Image}>
            <Link href="/home">
              <Image
                src="/Images/NavbarImages/googlelogo.png"
                width={22}
                height={22}
                onClick={handleNavClick}
              />
            </Link>
          </div>

          <div className={styles.Navbar_Container_Left_Text}>

            <Link href="/phone" style={{ textDecoration: 'none' }}><h3 onClick={handleNavClick} > Phones </h3></Link>
            <Link href="/Watches" style={{ textDecoration: 'none' }}> <h3 onClick={handleNavClick} > Watches </h3>  </Link>
            <Link href="/earbuds" style={{ textDecoration: 'none' }}><h3 onClick={handleNavClick} > Earbuds </h3> </Link>
            <Link href="/Accessories" style={{ textDecoration: 'none' }}> <h3 onClick={handleNavClick} > Accessories </h3> </Link>
          </div>

        </div>
      </div>

      <Search placeholder="Search Your Products Here..." onSearch={onSearch} enterButton style={{ width: '250px', marginTop: '-40px', marginLeft: '950px', fontWeight: 'bold' }} />
      
      <Link href="/Addtocart">AddtoCart</Link>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '100px', marginTop: '-60px' }} onClick={handleNavClick}>
        <Button onClick={showDrawer} type="primary" style={{ fontSize: '16px', fontWeight: 'bold', height: '34px', marginTop: '-2px' }}>
          Create New Account
        </Button>
      </div>
      <Drawer title={<div style={{ color: 'white', justifyContent: 'center', marginRight: '100px' }}>

        <Button onClick={showChildrenDrawer} style={{ marginRight: '10px' }}>
          Login
        </Button>
      </div>}
        width={450} closable={false} onClose={onClose} open={open}
        style={{ justifyContent: 'center', fontSize: '22px' }}>

        <Drawer
          title="Log Into Your Account"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              id="username"
              rules={[
                {

                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              id="password"
              rules={[
                {

                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </Drawer>
        <Form
          action='http://localhost:3001/submit-form'
          method='POST'
          style={{ justifyContent: 'center' }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            fontWeight: 'bold'
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="First Name"
            rules={[
              {
                message: 'Please input your firstname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[
              {
                message: 'Please input your lastname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="Phone Number"
            rules={[
              {
                message: 'Please input your phonenumber!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="Email Address"
            rules={[
              {
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="Password"
            rules={[
              {

                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="Confirm Password"
            rules={[
              {

                message: 'Please Confirm Your Password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" style={{ fontWeight: 'bold' }} htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
          <Image
            src='/formimg.webp'
            width={420}
            height={220}
            style={{ marginTop: '-15px', marginLeft: '-15px', borderRadius: '15px' }}
          />
        </Form>
      </Drawer>
    </div>
  )
}

export default Navbar
