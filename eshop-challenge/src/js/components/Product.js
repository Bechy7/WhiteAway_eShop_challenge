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
            npkId: `${props.product.npkId}`,
            productId: props.product.productId,
            url: `${props.product.url}`,
            name: `${props.product.name}`,
            image: `${props.product.image}`,
            brand: `${props.product.brand}`,
            price: props.product.price,

            clicks: 0,
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        // NavigationBar.IncrementItem()
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
                        <img alt={this.state.brand} src={this.state.image} />
                    </div>
                    <div>
                        <label class="label-name">
                            {this.state.brand}
                        </label>
                    </div>
                    <div>
                        <label class="label-desc">
                        {this.state.name}
                    </label>
                    </div>
                    <div>
                        <label class="label-price">
                        {this.state.price},-
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