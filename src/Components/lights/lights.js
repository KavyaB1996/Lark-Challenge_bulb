import React from 'react';
import './lights.css';
import { useState } from 'react';

function Lights(props) {
    var switchOne = "Off";
    var switchTwo = "Off";

    var [L1, setL1] = useState(false);
    var [L2, setL2] = useState(false);
   

    var LightOneFn=()=>{
        setL1(L1=!L1);
    }

    function LightTwoFn(){
        setL2(L2=!L2);
    }
    return (

        <div className='borderline'>
            <div>
                <span className={L1? "light1on" : "light1off"}></span> 
                <span className={L2 ? "light2on" : "light2off"}></span> 
            </div>
            <div >
                
                <a onClick={LightOneFn} className='switch1'>{L1? "ON" : "OFF"}</a>
                <a onClick={LightTwoFn} className='switch2'>{L2? "ON" : "OFF"}</a>
            </div>
        </div>
    );
}



export default Lights;