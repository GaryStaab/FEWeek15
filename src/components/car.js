import React from 'react';
import MaintList from './maint-list';
import NewMaintItemForm from './new-maint-item-form';

export default class Car extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.deleteCar(e, 
            this.props._id);
    }
    render(){
        // console.log(this.props);
        return (
            <div className="card">
                <div className="card-header bg-success text-white result">
                    <h3>{this.props.make} {this.props.model} {this.props.year}</h3>
                    <button onClick={this.handleClick}>Delete</button>
                </div>
                <div className="card-body">
                <MaintList key={this.props.index} id = {this.props._id} maintList={this.props.maintItems} deleteMaintItem = {this.props.deleteMaintItem}/>
                </div>
                <div className="card-footer">
                    <NewMaintItemForm id = {this.props._id} addMaintItem = {this.props.addMaintItem}/>
                </div>
            </div>
        );
    }
}