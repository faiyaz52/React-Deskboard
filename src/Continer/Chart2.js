import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'
 class Chart2 extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['InPatients','OutPatients'],
                datasets:[
                    {
                        labels:"hello",
                        data:[
                            456,
                            453,
                        
                       
                        ],
                        backgroundColor: [
                            'rgba(66, 17, 105)',
                            'rgba(145, 235, 103)',
                            
                        ],
                    }
                ]
            }
           
        }
    }
    render() {
        return (
            <div className="container" style={{marginLeft:"20px"}}>
                <Doughnut
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart2