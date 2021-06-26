import React from 'react';

export default class MaintItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(e) {
        // console.log(this.state);
        let maintIndex = this.props.maintID;
        this.props.deleteMaintItem(e, 
            this.props.id, maintIndex, 
            {maintenance: this.props.maintenance, 
             maintDate: this.props.maintDate, 
             maintMileage: this.props.maintMileage});
        this.setState({maintenance: '', maintDate: '', maintMileage: ''});
    }

    render() {
        return (
            <tr>
                <td>{this.props.maintenance}</td>
                <td>{this.props.maintDate}</td>
                <td>{this.props.maintMileage}</td>
                <td><button onClick={this.handleClick}>Delete</button></td>
            </tr>
        );
    }
}