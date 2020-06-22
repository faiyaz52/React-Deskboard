import React from 'react'
export const Page1 = () => {
    return (
        <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card">
                        <div class="header1">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div className="iconbed">
                                        <i class="fa fa-bed icon-bed" aria-hidden="true"></i>
                                    </div> 
                                </div>
                                <div>
                                    <h3 className="iconbedtext">3223</h3>
                                    <h4 className="text">Total Patients</h4>
                                </div>
                            </div>                                               
                        </div>             
                    </div>
                </div>
               <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card">
                        <div class="header1">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div className="iconuser">
                                        <i class="fa fa-users icon-users" aria-hidden="true"></i>
                                    </div> 
                                </div>
                                <div>
                                    <h3 className="iconbedtext">3223</h3>
                                    <h4 className="text">Available Staff</h4>
                                </div>
                            </div>                        
                        </div>             
                    </div> 
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card">
                        <div class="header1">                         
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div className="iconcart">
                                        <i class="fa fa-shopping-cart icon-cart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="iconbedtext">3223</h3>
                                    <h4 className="text">Avarage count</h4>
                                </div>
                            </div> 
                        </div>             
                    </div> 
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-3 col-10 d-block m-auto"> 
                    <div class="card">
                        <div class="header1">                         
                            <div class="d-flex justify-content-around">
                                <div>
                                    <div className="iconchart">
                                        <i class="fa fa-bar-chart bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="iconbedtext">3223</h3>
                                    <h4 className="text">Available Cars</h4>
                                </div>
                            </div> 
                        </div>             
                    </div> 
                 </div>
            </div>        
        </div>
    )
}
