import React from 'react'
import './App.css';
import { Page1 } from './Continer/Page1'
import { Page2 } from './Continer/Page2'
import { Page3 } from './Continer/Page3'
export const Home = () => {
    return (
        <div className="container" style={{marginLeft:"210px"}}>
         <Page1/>
         <Page2/>
         <Page3/>
       </div>
    )
}
