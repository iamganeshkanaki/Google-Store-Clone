'use client';

import React, { useState } from 'react';
import axios from 'axios';


const page = () => {
    const [Pname, setPname] = useState('');
    const [file, setFile] = useState();
    const sendData = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://127.0.0.1:3001/call', formData);

        const res1 = await fetch("http://127.0.0.1:3001/ProductName", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Pname })
        });





        const data = await res1.json();
        try {
            if ((res1 && res).status === 201 || !data) {
                alert('file Uploaded');
            }
        } catch (err) {
            alert("Error:", err);
        }

    }
    return (
        <>
            <form method="POST">
                <input type='text' name='Pname' value={Pname} onChange={(e) => setPname(e.target.value)} autoComplete='off' required /> <br />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} /> <br />
                <button onClick={sendData}>Submit</button>
            </form>
        </>
    )
}

export default page;