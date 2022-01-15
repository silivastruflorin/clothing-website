import React from "react";

import { BodyComponent } from "./components/body/body.component";
import {HeaderComponent} from "./components/header/header.component";

import { Container } from '@mui/material';

function HomePage(props) {
  return (
      <Container maxWidth="false">
        <HeaderComponent />
        <BodyComponent />
      </Container>

  );
}

export default HomePage;


