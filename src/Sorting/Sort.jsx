import React from "react";
import { bubblesort } from "../Algorithms/bubblesort";
import { mergesort } from "../Algorithms/mergesort";

import "./Sort.css";

export default class Sort extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {array: [],
        
        };
    }

    // when the app loads for the first time
    componentDidMount() {
        this.resetArray();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
      }

    // reset the random array
    resetArray() {
        const array = [];

        for (let i = 0; i < 300; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
        const arraybars = document.getElementsByClassName("array");
        console.log("HEERE: " +  arraybars[0]);
        //arraybars[0].style.backgroundColor = "white";
        for (let i = 0; i < arraybars.length; i++) {
            console.log("log: " + i);
            arraybars[i].style.backgroundColor = "white";
            console.log("HEERE: " +  arraybars[i]);
        }
    }

    async bubbleSort() {
        const anims = bubblesort(this.state.array);
        //console.log(anims);
        const arraybars = document.getElementsByClassName("array");
        
        for (let i = 0; i < anims.length; i++) {
            
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
                //console.log(i);
                
        };
        
        this.finished();
    }

    async mergeSort() {
    
        const anims = mergesort(this.state.array);
        const arraybars = document.getElementsByClassName("array");
        
        for (let i = 0; i < anims.length; i++) {
            
                const [id1, id2] = anims[i];
                const style1 = arraybars[id1].style;
                style1.height = `${id2}px`;
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
                    style={{height: `${value}px`}}>
                    </div>


                ))}
                
    
            </div>
            <div className="buttonCont">
                <button onClick={() => this.resetArray()}>Reset Array</button>
                <button onClick={() => this.bubbleSort()}>Bubblesort</button>
                <button onClick={() => this.mergeSort()}>MergeSort</button>
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
