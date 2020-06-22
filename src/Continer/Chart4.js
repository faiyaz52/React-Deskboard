import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'


 class Chart4 extends Component {
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels:['Female','Male'],
                datasets:[
                    {
                        labels:"hello",
                        data:[
                            456,
                            453,
                        
                       
                        ],
                        backgroundColor: [
                            'rgba(66, 17, 105)',
                            'rgba(242, 88, 27)',
                            
                        ],
                    }
                    
                ]
                
            }
           
        }
    }
    render() {
        return (
            <div className="container"  style={{width:"370px",height:"370px",marginLeft:"-60px"}}>
                <Doughnut
                    data={this.state.chartData}
                    options={{}}  
                     
                />
            </div>
        )
    }
}
export default Chart4