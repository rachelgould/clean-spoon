import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { Container, Row, Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getRecipeID} from '../../lib/api.js';


class RecipePage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      recipeTitle: "",
      recipePrepTime: "",
      recipeCookTime: "",
      recipeTotalTime: "",
      image: "",
      recipeIngredients: []
    }; 

  }
  componentDidMount() {
    getRecipeID(this.props.match.params.id, (res) => {
      //console.log("Here is the image: " + ))
      this.setState({
        recipeTitle: res.data.name,
        recipePrepTime: "Prep time: " + res.data.prepTime,
        recipeCookTime: "Cook time: " + res.data.cookTime,
        recipeTotalTime: "Total time: " + res.data.totalTime,
        image: res.data.images[0].hostedLargeUrl,
        recipeIngredients: res.data.ingredientLines
      }) 
    });
  }

  render() {
    return (
      <div>
      <Navbar />
      <br />
      <h1> {this.state.recipeTitle} </h1>
      <img src= {this.state.image} />
      <p> {this.state.recipePrepTime} </p>
      <p> {this.state.recipeCookTime} </p>
      <p> {this.state.recipeTotalTime} </p>
      <br />
      <h4>Ingredients Required:</h4>
      <p> {this.state.recipeIngredients}</p>
      </div>
    )}

}

export default RecipePage;
