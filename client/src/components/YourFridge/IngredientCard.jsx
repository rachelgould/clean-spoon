import React from 'react';
import { Card , CardTitle, Button } from 'reactstrap';

function IngredientCard(props) {
  const getImage = () => {
    if (!props.image) {
      return 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80'
    }
    return props.image
  }
  return (
    <Card body className="ingredient-card" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImage()})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}> 
      <CardTitle>{props.name}</CardTitle>
      <Button color="danger" onClick={() => props.removeItem(props.id)}> Remove </Button>
    </Card>
  );
}
export default IngredientCard;



