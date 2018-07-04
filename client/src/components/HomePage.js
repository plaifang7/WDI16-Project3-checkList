import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from'styled-components'


const HomeWrap = styled.div`
margin: auto;
padding: 77px;
background-image: url('https://media.istockphoto.com/photos/supermarket-interior-with-shopping-cart-picture-id505068034?k=6&m=505068034&s=612x612&w=0&h=0sUqDnKdRjZZtvHZeLCIu6HIL37MU3ICydXDEiz7Kno=');
background-size: cover;
background-repeat: no repeat;
height 100vh;

div{
  margin: 200px auto;
  text-align: center;
  pading: 25px;
}

`


class HomePage extends Component {
  render() {
    return (
      <center>
      <HomeWrap>
        <div>
        <h1>Welcome to ✓List</h1>
        <p>never forget what you came to the store for again!</p>

        <Link to="/users"><Button>Enter</Button></Link>
        </div>
      </HomeWrap>
      </center>
    );
  }
}

export default HomePage;