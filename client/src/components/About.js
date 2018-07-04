import React, { Component } from 'react';
import styled from 'styled-components'

const AboutWrap = styled.div`
margin: 250px auto;
div{
  img{
    width: 100px;
    height: 100px;
  }
}
span{
  color: #1E90FF
    text-shadow: 2px 2px black;
}
`
class About extends Component {
  render() {
    return (
      <center>
      <AboutWrap>
        <h1>About <span>checkList</span></h1>
        <center>
        <p>checkList is an app that allows it's users to create custom shopping list for their everyday use. This app allows you, the user to create, delete and edit your custom shopping list. This app is made specifically for people who like to get in and out of the store fast and effectively when gone shopping. In the near future we would like to incorporate an API that provides the user with aisle numbers for specific items and specific stores to help the user navigate with ease.</p>
        <h3>Click the icons below to see more from our developer:</h3>
        <div>
          <a href="https://twitter.com/PLFtheWD7"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ11DW9srBbAzUbRu_ELaOJnxWaReXUtZ0EOVJdV58qwrST4zF"/> </a>
          <a href="https://github.com/plaifang7"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/></a>
          <a href="https://www.linkedin.com/in/patrick-lai-fang7/"><img src="http://nashvillerocks.com/wp-content/uploads/2015/08/linkedin-cracked.png"/></a>
        </div>
        
        </center>
      </AboutWrap>
      </center>
    );
  }
}

export default About;