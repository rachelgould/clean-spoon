import React, { Component } from 'react';
import { Card , CardTitle, Button } from 'reactstrap';

function IngredientCard(props) {
  let { image } = props
  return (
    <Card body className="ingredient-card" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}> 
      <CardTitle>{props.name}</CardTitle>
      {/* Edit remove item function! */}
      <Button color="danger" onClick={() => this.props.removeItem(1)}> Remove </Button>
    </Card>
  );
}
export default IngredientCard;



