import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
 class Chart extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['07 am','08 am','09 am','10 am','11 am','12 pm'],
            
                datasets:[
                    {
                        label:"Time Admitted",
                        data:[
                            123,
                            233,
                            421,
                            213,
                            333,
                            23,                                     
                        ],
                        lineTension:0.4,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
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
            <div className="container" style={{marginLeft:"20px"}}>
                <Line
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart