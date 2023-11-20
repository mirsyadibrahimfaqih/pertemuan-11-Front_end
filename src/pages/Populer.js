import React, { useState } from 'react';

const Populer = () => {

    //variable angka 1
const [ angka1,setAngka1] = useState(1)

const handleTambah = () => {
    setAngka1(angka1+1)
    console.log(angka1)
}

    return (
        <div>
            <h1>{angka1}</h1>
            <button onClick={handleTambah}>Tambah</button>
        </div>
    );
}

export default Populer;
