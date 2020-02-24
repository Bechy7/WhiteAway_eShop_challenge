import React, { Component } from 'react';
import './Styles.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsInCart: 0,
        };
    }

    // IncrementItem = () => {
    //     this.setState({ productsInCart: this.state.productsInCart + 1 });
    // }
    // DecreaseItem = () => {
    //     if (this.state.productsInCart > 0) {
    //         this.setState({ productsInCart: this.state.productsInCart - 1 });
    //     }
    // }

    render() {
        return (
            <div class="div-navbar">
                <img class="img-navbar" alt="Electrolux" src="https://uhc.dk/wp-content/uploads/2017/06/Whiteaway-nyt-logo-e1554198532670.png" />
                {/* <button class="btn-cart">Cart ({this.state.productsInCart})</button> */}
            </div>
        );
    }
}

export default NavigationBar;