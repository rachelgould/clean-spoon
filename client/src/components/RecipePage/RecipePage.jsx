import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { Container, Row, Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getRecipeID } from '../../lib/api.js';


class RecipePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      recipeTitle: "",
      recipePrepTime: "",
      recipeCookTime: "",
      recipeTotalTime: "",
      image: "",
      recipeIngredients: [],
      recipeSteps: ""
    };

    this.toggle = this.toggle.bind(this);

  }
  componentDidMount() {
    getRecipeID(this.props.match.params.id, (res) => {
      console.log("Here are the ingredients: " + res.data.ingredientLines)
      this.setState({
        recipeTitle: res.data.name,
        recipePrepTime: "Prep time: " + res.data.prepTime,
        recipeCookTime: "Cook time: " + res.data.cookTime,
        recipeTotalTime: "Total time: " + res.data.totalTime,
        recipeSteps: res.data.attribution.url,
        image: res.data.images[0].hostedLargeUrl,
        recipeIngredients: res.data.ingredientLines + " "
      })
    });
  }


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div class="recipePage">
        <h1> {this.state.recipeTitle} </h1>
        <div id="recipeImg"> <img src={this.state.image} /></div>
        <p> {this.state.recipePrepTime} </p>
        <p> {this.state.recipeCookTime} </p>
        <p> {this.state.recipeTotalTime} </p>
        <br />
        <h4>Ingredients Required:</h4>
        <p> {this.state.recipeIngredients}</p>
        <h4> Steps: </h4>
        <p> Find the steps for this recipe <a href={this.state.recipeSteps} target="_blank">here.</a></p>

       <button onClick={this.toggle}> View Modal Version</button>
       <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader id="modalHeader" toggle={this.toggle}>{this.state.recipeTitle} </ModalHeader>
          <ModalBody>
            <center><img src={this.state.image} /> </center>
            <br />
            <p> {this.state.recipePrepTime} </p>
            <p> {this.state.recipeCookTime} </p>
            <p> {this.state.recipeTotalTime} </p>
            <h4>Ingredients Required:</h4>
            <p> {this.state.recipeIngredients}</p>
            <h4> Steps: </h4>
            <p> Find the steps for this recipe <a href={this.state.recipeSteps} target="_blank">here.</a></p>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>

        </Modal>
        </div>
      </div>
    )
  }

}

export default RecipePage;
