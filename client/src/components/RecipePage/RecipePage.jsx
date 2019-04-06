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
      recipeIngredients: [], 
      recipeSteps: ""
    }; 

  }
  componentDidMount() {
    getRecipeID(this.props.match.params.id, (res) => {
      console.log("Here are the steps: " + res.data.attribution.url)
      this.setState({
        recipeTitle: res.data.name,
        recipePrepTime: "Prep time: " + res.data.prepTime,
        recipeCookTime: "Cook time: " + res.data.cookTime,
        recipeTotalTime: "Total time: " + res.data.totalTime,
        recipeSteps: res.data.attribution.url,
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
      <h4> Steps: </h4>
      <p> Find the steps for this recipe <a href={this.state.recipeSteps}>here.</a></p>
      </div>
    )}

}

export default RecipePage;
