import React, { Component } from 'react';
import { Card , CardTitle, Button } from 'reactstrap';

function IngredientCard(props) {
  return (
    <Card body className="ingredient-card" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}> 
      <CardTitle>{props.name}</CardTitle>
      {/* Edit remove item function! */}
      <Button color="danger" onClick={() => props.removeItem(props.id)}> Remove </Button>
    </Card>
  );
}
export default IngredientCard;



