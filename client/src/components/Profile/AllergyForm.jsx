import React, {Component} from 'react';

class AllergyForm extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            foodItem: '',
        };
        this.state = this.initialState;
}
handleChange = event => {
    this.setState({
        foodItem: event.target.value
    });
}

onFormSubmit = (event) => {
    const {foodItem} = this.state;
    event.preventDefault();   
    if(foodItem){
    this.props.handleSubmit(foodItem);
    this.setState(this.initialState);
    }
}

render() {
    return (
        <div>
        <br />
            <input 
                type="text" 
                name="foodItem" 
                onChange={this.handleChange}
                placeholder="Add allergies here.." />
            <button type="submit" onClick={this.onFormSubmit}>
                Add
            </button>
        </div>
    );
}

}

export default AllergyForm;