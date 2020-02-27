// src/js/components/Product.js

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Styles.css'
import NavigationBar from './NavigationBar'

class Product extends Component {
    constructor(props) {
        super(props);
        console.log("props:" + props.product.name);
        this.state = {
            clicks: 0
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        //  NavigationBar.IncrementBasket();
    }
    DecreaseItem = () => {
        if (this.state.clicks > 0) {
            this.setState({ clicks: this.state.clicks - 1 });
            // NavigationBar.DecreseItem()
        }
    }

    render() {
        return (
            <Paper>
                <div class="div-padding">
                    <div class="div-image">
                        <img class="img-product" alt={this.props.product.brand} src={this.props.product.image} />
                    </div>
                    <div>
                        <label class="label-brand">
                            {this.props.product.brand}
                        </label>
                    </div>
                    <div>
                        <label class="label-name">
                        {this.props.product.name}
                    </label>
                    </div>
                    <div class="div-price">
                        <label class="label-price">
                        {this.props.product.price},-
                    </label>
                    </div>
                    <div class="div-amount">
                        <button onClick={this.DecreaseItem}>-</button>
                        <label class="label-clicks">{this.state.clicks}</label>
                        <button onClick={this.IncrementItem}>+</button>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Product;