// src/js/components/Product.js

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Styles.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        if (this.state.clicks > 0) {
            this.setState({ clicks: this.state.clicks - 1 });
        }
    }

    render() {
        return (
            <Paper>
                <div class="div-padding">
                    <div class="div-image">
                        <img alt="Electrolux" src="https://images.wagcdn.com/500/500/fill/p/prod_auto/frituregryde/hd9650-90.jpg" />
                    </div>
                    <div>
                        <label class="label-name">
                            Electrolux
                        </label>
                    </div>
                    <div>
                        <label class="label-desc">
                            Description
                    </label>
                    </div>
                    <div>
                        <label class="label-price">
                            501,-
                    </label>
                    </div>
                    <div class="div-amount">
                        <button onClick={this.DecreaseItem}>-</button>
                        <label>{this.state.clicks}</label>
                        <button onClick={this.IncrementItem}>+</button>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default App;