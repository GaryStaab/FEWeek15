import React from 'react';

export default class NewMaintItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maintenance: '',
            maintDate: '',
            maintMileage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(e) {
        // console.log(this.state);
        this.props.addMaintItem(e, 
            this.props.id, 
            {maintenance: this.state.maintenance, 
             maintDate: this.state.maintDate, 
             maintMileage: this.state.maintMileage});
        this.setState({maintenance: '', maintDate: '', maintMileage: ''});
    }

    render() {
        return (
            <div>
                <input type="text" name="maintenance" placeholder="Maintenance" onChange={this.handleChange} value={this.state.maintenance} />
                <input type="date" name="maintDate" placeholder="maintDate" onChange={this.handleChange} value={this.state.maintDate} />
                <input type="number" name="maintMileage" placeholder="maintMileage" onChange={this.handleChange} value={this.state.maintMileage} />
                <button onClick={this.handleClick}>Add Maintenance</button>
            </div>
        )
    }
}