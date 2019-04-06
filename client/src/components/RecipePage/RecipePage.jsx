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
      image: "",
      recipeIngredients: []
    }; 

  }
  componentDidMount() {
    getRecipeID(this.props.match.params.id, (res) => {
      console.log("Here is the image: " + JSON.stringify(res.data.images["hostedLargeUrl"]))
      this.setState({
        recipeTitle: res.data.name,
        recipePrepTime: "Prep time: " + res.data.prepTime,
        recipeCookTime: "Cook time: " + res.data.cookTime,
        image: JSON.stringify(res.data.images["hostedLargeUrl"]),
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
      <p> {this.state.recipePrepTime} </p>
      <p> {this.state.recipeCookTime} </p>
      <br />
      <h4>Ingredients Required:</h4>
      <p> {this.state.recipeIngredients}</p>
      </div>
    )}

}

export default RecipePage;
