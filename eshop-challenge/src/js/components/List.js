// src/js/components/List.js

import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import './Styles.css'
import { getData } from "../actions/index";

export class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div class="div-list">
      <Grid container flexgrow="1">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {this.props.products.map(product => (
              <Grid key={product.productId} item>
                <Product product = {product}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(List);