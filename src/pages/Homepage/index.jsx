import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import MenuCars from '../../components/MenuCars';


const Homepage = () => (
  <Container>
    <Header />
    <MenuCars />
  </Container>
);

export default Homepage;