import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
 class Chart5 extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['A','B','C','D'],
            
                datasets:[
                    {
                        label:"Time Admitted",
                        data:[
                            100,
                            233,
                            621,
                            213,
                            333,
                            23,                                     
                        ],
                        fill:false,
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
            <div className="" style={{marginLeft:"10px",height:"200px",width:"230px"}}>
                <Line
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart5