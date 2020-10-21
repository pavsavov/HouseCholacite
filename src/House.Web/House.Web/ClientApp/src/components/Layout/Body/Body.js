import React from 'react';
import { Container } from '@material-ui/core';

const Body = (props) => {
  return <Container>{props.children}</Container>;
};

export { Body };
