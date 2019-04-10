import React from 'react';
import { Container, Row, Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RecipeModal = (props) => {
  let { haveIngredients, needIngredients, prepTime } = props
  let { 
    image,
    source,
    id,
    sourceUrl,
    recipeName
  } = props.recipe
  let imagePlaceholder = 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80';

  const saveRecipe = () => {
    props.toggle();
    props.save();
  }

  return(
    <Modal isOpen={props.active} toggle={props.toggle} className="recipe-modal">
      <ModalHeader id="modalHeader" toggle={props.toggle}>{recipeName}</ModalHeader>
      <ModalBody>
        <center><img src={image || imagePlaceholder} /> </center>
        <br />
        <p>{prepTime}</p>
        <h4>Ingredients:</h4>
        <p>You have: {haveIngredients}</p>
        <p>You need: {needIngredients}</p>
        <h4> Steps: </h4>
        <p> Find the steps for this recipe at <a href={sourceUrl} target="_blank">{source}</a></p>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={saveRecipe}>Save</Button>
        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default RecipeModal;
