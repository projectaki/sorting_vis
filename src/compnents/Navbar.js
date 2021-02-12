import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav>
                        <div class="nav-wrapper">
                            <p style={{margin: 0, textAlign: "center", fontSize: "3vh", padding: 0}}>Sorting Visualiser</p>
                        </div>
                    </nav>
            </div>
        );
    }
}

export default Navbar;