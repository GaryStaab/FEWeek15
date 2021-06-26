import React from 'react';

export default class NewCarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            make: '',
            model: '',
            year: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(e) {
        // console.log(this.state);
        this.props.addNewCar(e, {make: this.state.make, model: this.state.model, year: this.state.year, maintItems: []});
        this.setState({make: '', model: '', year: ''});
    }

    render() {
        return (
            <div>
                <input type="text" name="make" placeholder="Make" onChange={this.handleChange} value={this.state.make} />
                <input type="text" name="model" placeholder="Model" onChange={this.handleChange} value={this.state.model} />
                <input type="text" name="year" placeholder="Year" onChange={this.handleChange} value={this.state.year} />
                <button onClick={this.handleClick}>Add Car</button>
            </div>
        )
    }
}