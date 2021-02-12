import React from "react";
import { bubblesort } from "../Algorithms/bubblesort";
import { mergesort } from "../Algorithms/mergesort";

import "./Sort.css";

export default class Sort extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {array: [],
            terminate: true,
            running: false
        
        };
    }

    // when the app loads for the first time
    componentDidMount() {
        this.setupArray();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
      }

    // reset the random array
    setupArray() {
        const array = [];

        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 60));
        }
        this.setState({array});
        const arraybars = document.getElementsByClassName("array");
        
        //arraybars[0].style.backgroundColor = "white";
        for (let i = 0; i < arraybars.length; i++) {
            
            arraybars[i].style.backgroundColor = "white";
            
        }
    }

    resetArray() {
        this.setState({terminate: true});
        this.setState({running: false});
        this.setupArray();
    }

    bubbleSort() {
        if(this.state.running === false) {
            this.setState({running: true});
            this.bubbleSortCode();
        }
    }

    mergeSort() {
        if(this.state.running === false) {
            this.setState({running: true});
            this.mergeSortCode();
        }
    }

    async bubbleSortCode() {
        this.setState({terminate: false});
        await delay(1);
        const anims = bubblesort(this.state.array);
        //console.log(anims);
        const arraybars = document.getElementsByClassName("array");
        
        for (let i = 0; i < anims.length; i++) {
            if(this.state.terminate === true) {
                return;
            }
            const [id1, id2] = anims[i];
            const style1 = arraybars[id1].style;
            const style2 = arraybars[id2].style;
            style1.backgroundColor = "red";
            style1.backgroundColor = "white";
            const temp = style1.height;
            style1.height = style2.height;
            style2.height = temp;
            style2.backgroundColor = "red";

            await delay(1);
            
            style2.backgroundColor = "white";
                
                
        };
        
        this.finished();
    }

    async mergeSortCode() {
        this.setState({terminate: false});
        await delay(1);
        const anims = mergesort(this.state.array);
        const arraybars = document.getElementsByClassName("array");
        
        for (let i = 0; i < anims.length; i++) {
            if(this.state.terminate === true) {
                return;
            }
            const [id1, id2] = anims[i];
            const style1 = arraybars[id1].style;
            style1.height = `${id2}vh`;
            style1.backgroundColor = "red";
            await delay(1);
            style1.backgroundColor = "white";

        };
        this.finished();
    }

    async finished() {
        const arraybars = document.getElementsByClassName("array");
        for (let i = 0; i < arraybars.length; i++) {
            arraybars[i].style.backgroundColor = "green";
            await delay(0.1);
        }
    }

    render() {
        const {array} = this.state;

        return (
            <>
                <div className="cont">
                {array.map((value, idx) => (
                    <div 
                    className="array" 
                    key={idx}
                    style={{height: `${value}vh`, width: `0.6vw`}}>
                    </div>


                ))}
                
    
            </div>
            <div className="buttonCont">
                
                
                
            </div>
            <div class="row">
                <div class="col s4">
                    <center>
                        <button className="waves-effect waves-light btn" onClick={() => this.resetArray()}>Reset Array</button>
                    </center>
                </div>
                <div class="col s4">
                    <center>
                        <button className="waves-effect waves-light btn" onClick={() => this.bubbleSort()}>Bubblesort</button>
                    </center>
                </div>
                <div class="col s4">
                    <center>
                        <button className="waves-effect waves-light btn" onClick={() => this.mergeSort()}>MergeSort</button>
                    </center>
                </div>
            </div>
            </>
            
        )
    }

}

function delay(n) {  
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}
