import React from 'react'
import Chart from './Chart'
import Chart2 from './Chart2'
import Chart4 from './Chart4'
export const Page2 = () => {
    return (
        <div className="container">
            <div className="row">
               <div className="col-lg-9 col-md-9 col-sm-9 col-10 d-block m-auto"> 
                    <div class="card2">
                        <div class="header">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div >
                                    <Chart/>
                                    </div> 
                                </div>
                                <div>
                                <Chart2/>
                                </div>
                            </div>                       
                        </div>             
                    </div>
                </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card2">
                    <div class="header">
                          <Chart4/>              
                        </div>               
                    </div> 
                </div>
            </div>        
        </div>
    )
}
