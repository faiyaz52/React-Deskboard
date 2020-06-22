import React, { Component } from 'react'
import {Bar,Line,Pie,Doughnut} from 'react-chartjs-2'


 class Chart extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                
                labels:['Oct 2019','Nov 2019','Dec 2019','Jan 2020','Feb 2020','Mar 2020'],
                datasets:[
                    {
                        label:"InPatients vs OutPatients Trends",
                            data:[
                                476,
                                423,     
                                523, 
                                423,     
                                523, 
                                456,
                                423,                           								
                            ],                         
                            maxBarThickness: 8,
                            minBarLength: 5,                       
                            backgroundColor: [
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                    },{
                        label:"",
                        data:[
                               
                                446,
                                423,
                                473,  
                                413,
                                473,
                                423,
                                473,     								
                            ],
                          
                            maxBarThickness: 8,
                            minBarLength: 5,
                            
                        backgroundColor: [
                            'rgba(145, 235, 103)',
                            'rgba(145, 235, 103)',
                            'rgba(145, 235, 103)',
                            'rgba(145, 235, 103)',
                            'rgba(145, 235, 103)',
                            'rgba(145, 235, 103)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                    }
                ]
            }
           
        }
    }
    render() {
        return (
            <div className="container chart" style={{marginLeft:"20px"}}>
                <Bar
                    data={this.state.chartData}
                
                />
            </div>
        )
    }
}
export default Chart