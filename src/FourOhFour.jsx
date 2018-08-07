import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
  <Fragment>
    <h1>404</h1>
    <Link to="/">Home</Link>
  </Fragment>
);

export default FourOhFour;
