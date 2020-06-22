import React, { Component } from 'react'
import {Polar} from 'react-chartjs-2'
 class Chart6 extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['A','B','C',],
            
                datasets:[
                    {
                        label:"Time Admitted",
                        data:[
                            300,
                            233,
                            621,
                            213,
                            333,
                            23,                                     
                        ],
                        backgroundColor: [
                            'rgba(66, 17, 105)',
                            'rgba(66, 17, 105)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                     
                        data:[
                            600,
                            433,
                            621,
                            213,
                            333,
                            23,                                     
                        ],
                        backgroundColor: [
                            'rgba(66, 17, 105)',
                            'rgba(145, 235, 103)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                    }
                ]
            }
           
        }
    }
    render() {
        return (
            <div className="" style={{marginLeft:"-70px",height:"220px",width:"380px"}}>
                <Polar
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart6