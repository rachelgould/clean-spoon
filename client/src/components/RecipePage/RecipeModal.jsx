import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RecipeModal = (props) => {
  let { prepTime, addToShoppingList } = props
  let [haveIngredients, setHaveIngredients] = useState(false)
  let [needIngredients, setNeedIngredients] = useState(false)
  console.log("haveIngredients is", haveIngredients)
  console.log("needIngredients ", needIngredients)
  console.log("All props: ", props)
  let { 
    image,
    source,
    id,
    sourceUrl,
    recipeName
  } = props.recipe
  let imagePlaceholder = 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80';

  useEffect(() => {
    if (props.haveIngredients && props.needIngredients) {
      setHaveIngredients(props.haveIngredients);
      setNeedIngredients(props.needIngredients);
    }
  }, [props.haveIngredients, props.needIngredients])

  const saveRecipe = () => {
    props.toggle();
    props.save();
  }

  const makeIngredientList = ingredients => {
    let list = ingredients.map((ingredient) => {
      return (
        <li>{ingredient}</li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }

  return(
    <Modal isOpen={props.active} toggle={props.toggle} className="recipe-modal">
      <ModalHeader id="modalHeader" toggle={props.toggle}>{recipeName}</ModalHeader>
      <ModalBody>
        <Jumbotron fluid style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image || imagePlaceholder})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </Jumbotron>
        <h4 className="prep-time">Ready in {prepTime}</h4>
        <h4>Make This Recipe</h4>
        <p>Find the steps for this recipe at <a href={sourceUrl} target="_blank">{source}</a></p>
        <a href="#" onClick={addToShoppingList}>Add the ingredients to your shopping list.</a>
        <h4>Ingredients</h4>
        <div classname="ingredients-list container">
          <div className="ingredients-list">
            <p>You Have:</p>
            {haveIngredients ? makeIngredientList(haveIngredients) : "Loading ingredients..."}
          </div>
          <div className="ingredients-list">
            <p>You Need:</p>
            {needIngredients ? makeIngredientList(needIngredients) : "Loading ingredients..."}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveRecipe}>Save</Button>
        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default RecipeModal;
