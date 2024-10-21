"use client";
import {useState} from "react";
export default function Form(){
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const [isSent, setIsSent] = useState(false);
  
    function handleNamaChange(e:any) {
      setNama(e.target.value);
    }
  
    function handleEmailChange(e:any) {
      setEmail(e.target.value);
    }
    function handlePesanChange(e:any) {
      setPesan(e.target.value);
    }

    if (isSent) {
        return (
            <><h1>Nama: {nama}</h1>
            <h1>Email: {email}</h1>
            <h1>Pesan {pesan}</h1>
            <p>data diatas akan segera di input ke database. terimakasih!</p></>
        );
      }
  
    return (
      <>
        <h2 className="text-center mt-20 mb-5 text-lg">Contact Saya</h2>
        <div className=" flex justify-center">
        <form action="" className=" flex m-2 p-2 flex-col w-1/4 " onSubmit={(e:any) => {
            e.preventDefault();
            setIsSent(true);
        }}>
        <label className="p-3">
          <h1>Nama depan:{' '}</h1>
          <input className="border-2 border-solid border-slate-950"
            onChange={handleNamaChange}
          />
        </label>
        <label className="p-3">
          <h1>Email:{' '}</h1>
          <input className="border-2 border-solid border-slate-950"
            onChange={handleEmailChange}
          />
        </label>
        <label>
         <h1>Pesan:{' '}</h1> 
          <textarea className="border-2 border-solid border-slate-950" name="" id="" onChange={handlePesanChange}></textarea>
        </label>
        <div className="flex justify-center">
        <button type="submit" className="rounded-full bg-blue-500 mx-2 text-white w-1/4">Submit</button>
        <button type="reset" className="rounded-full bg-slate-500 text-white w-1/4">Clear</button>
        </div>
        </form>
        </div>
      </>
      
    );
  }