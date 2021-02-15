import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav>
                    <div class="nav-wrapper">
                        <div style={{display: "grid", gridTemplateColumns: "20vw 80vw"}}>
                            <div className="grid-item" style={{paddingLeft: "1vw"}}>
                                <a href="https://projectaki.github.io/portfolio_akos_madarasz/#/Projects">
                                    <i class="fas fa-arrow-left"></i>
                                </a>
                            </div>

                            <div>
                                <div className="grid-item"></div>
                                    <p style={{margin: 0, marginLeft: "25vw", fontSize: "3vh", padding: 0}}>Sorting Visualiser</p>
                                </div>
                            </div>
                    </div>
                        
                    </nav>
            </div>
        );
    }
}

export default Navbar;