import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getRecipeID } from '../../lib/api.js';

const RecipeModal = (props) => {
  // const [active, setActive] = useState(props.active)

  // const toggle = () => {
  //   setActive(!active)
  // }

  console.log("recipe: ", props.recipe)

  // getRecipeID(this.props.match.params.id, (res) => {
  //   this.setState({
  //     recipeTitle: res.data.name,
  //     recipePrepTime: "Prep time: " + res.data.prepTime,
  //     recipeCookTime: "Cook time: " + res.data.cookTime,
  //     recipeTotalTime: "Total time: " + res.data.totalTime,
  //     recipeSteps: res.data.attribution.url,
  //     image: res.data.images[0].hostedLargeUrl,
  //     recipeIngredients: res.data.ingredientLines + " "
  //   }))

  return(
    <Modal isOpen={props.active} toggle={props.toggle} className="recipe-modal">
      {/* <ModalHeader id="modalHeader" toggle={toggle}>{this.state.recipeTitle} </ModalHeader>
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
      </ModalFooter> */}
    </Modal>
  )
}


// class RecipePage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       recipeTitle: "",
//       recipePrepTime: "",
//       recipeCookTime: "",
//       recipeTotalTime: "",
//       image: "",
//       recipeIngredients: [],
//       recipeSteps: ""
//     };

//   }
  

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <br />
//         <div class="recipePage">
//         <h1> {this.state.recipeTitle} </h1>
//         <div id="recipeImg"> <img src={this.state.image} /></div>
//         <p> {this.state.recipePrepTime} </p>
//         <p> {this.state.recipeCookTime} </p>
//         <p> {this.state.recipeTotalTime} </p>
//         <br />
//         <h4>Ingredients Required:</h4>
//         <p> {this.state.recipeIngredients}</p>
//         <h4> Steps: </h4>
//         <p> Find the steps for this recipe <a href={this.state.recipeSteps} target="_blank">here.</a></p>

//        <button onClick={this.toggle}> View Modal Version</button>
       
//         </div>
//       </div>
//     )
//   }

// }

export default RecipeModal;
