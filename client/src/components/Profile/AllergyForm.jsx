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
  //  const { foodItem } = event.target;
    this.setState({
        foodItem: event.target.value
    });
}


onFormSubmit = (event) => {
    const {foodItem} = this.state;
    event.preventDefault();   
    this.props.handleSubmit(foodItem);
    this.setState(this.initialState);
}

render() {

    return (
        <form onSubmit={this.onFormSubmit}>
        <br />
            <label>Food Item</label>
            <input 
                type="text" 
                name="foodItem" 
                onChange={this.handleChange} />

            <button type="submit">
                Submit
            </button>
        </form>
    );
}

}

export default AllergyForm;