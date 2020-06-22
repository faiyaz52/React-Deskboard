import React from 'react'
import Chart3 from './Chart3'
import Chart5 from './Chart5'
import Chart6 from './Chart6'
export const Page3 = () => {
    return (
        <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto"> 
                    <div class="card3">
                        <div class="header">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div>
                                       <Chart3/>
                                    </div> 
                                </div>
                            </div>  
                        </div>             
                    </div>
                </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card3">
                        <div class="header" style={{height:"230px",marginTop:"30px"}}>
                            <Chart6/>
                        </div>
                 </div>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card3" >
                        <div class="header" >
                        <Chart5/>
                        </div>             
                    </div> 
                 </div>
            </div>        
        </div>
    )
}
