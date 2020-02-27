import React, { Component } from 'react';
import './Styles.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsInCart: 0,
        };
    }

    IncrementBasket = () => {
        this.setState({ productsInCart: this.state.productsInCart + 1 });
    }
    DecreaseBasket = () => {
        if (this.state.productsInCart > 0) {
            this.setState({ productsInCart: this.state.productsInCart - 1 });
        }
    }

    render() {
        return (
            <div class="div-navbar">
                <img class="img-navbar" alt="whiteAway" src="https://uhc.dk/wp-content/uploads/2017/06/Whiteaway-nyt-logo-e1554198532670.png" />
                <button class="btn-navbar-cart">Cart ({this.state.productsInCart})<img class="img-cart" src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-02-512.png"/></button>
            </div>
        );
    }
}

export default NavigationBar;