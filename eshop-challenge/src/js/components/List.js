// src/js/components/List.js

import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import './Styles.css'
import { getData } from "../actions/index";

export default function SpacingGrid() {
  const [spacing] = React.useState(8);

  return (
    <div class="div-list">
    <Grid container flexGrow="1" spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item>
              <Product/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}