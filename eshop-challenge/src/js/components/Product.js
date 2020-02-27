import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './Styles.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    //Increment the number of a certain item added to the basket
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    //Decrease the number of a certain item added to the basket
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