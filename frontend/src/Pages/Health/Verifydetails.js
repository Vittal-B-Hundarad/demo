import React from 'react'
import { useState } from 'react';
import './Verify.css'
import { useNavigate } from 'react-router';
const Verifydetails = () => {
    const auth = localStorage.getItem("user");
    const get = JSON.parse(localStorage.getItem("healthinfo")).symptoms;
    const get1 = JSON.parse(localStorage.getItem("healthinfo"));
    // const get1 = JSON.parse(localStorage.getItem("healthinfo"));
    // let size = JSON.parse(getdetails).symptoms;
    // const [symp,setSymp] = useState(size);
    // console.log(get1);
    // console.log(get);

    const navigate = useNavigate();

    const edit=()=>{
        navigate('/addhealthdetails');
    }
  return (
    <>
    <div className='main'>
    <div className='main2'>
   <p>Usn:<input type="text" value={get1.usn} /></p> <br />
   <p>Name:<input type="text" value={get1.name} /></p> <br />
   <p>Age:<input type="text" value={get1.age} /></p> <br />
   <p>Gender:<input type="text" value={get1.gender} /></p> <br />
   <p>Disease:<input type="text" value={get1.disease} /></p> <br />
   <strong><p>Symptoms</p></strong> <br />
   <div className='symp'>
   {    
        
        get.map((itemmm)=>{
            {return <ul><li>{itemmm}</li></ul>}
        })
        
    }
    </div>
    <button>Submit</button>
    <button onClick={edit}>Edit Info</button>
    </div>
    </div>




    </>
  )
}

export default Verifydetails