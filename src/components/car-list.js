import React from 'react';
//import { render } from 'react-dom';
import Car from './car';
import NewCarForm from './new-car-form';

const CAR_ENDPOINT = 'https://crudcrud.com/api/91a051bab8324cfd9885e911e07d9eb8/cars';


export default class CarList extends React.Component {
    constructor(props) {
        super (props);
        this.addNewCar = this.addNewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
        this.addMaintItem = this.addMaintItem.bind(this);
        this.deleteMaintItem = this.deleteMaintItem.bind(this);
        this.retrieveEndpoint = this.retrieveEndpoint.bind(this);
        this.data = [];
    }

    componentDidMount() {
        this.retrieveEndpoint(CAR_ENDPOINT);
    }

    retrieveEndpoint(ENDPOINT) {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(retdata => { 
                let rdata = retdata ? retdata : [];
                this.data = rdata;
                this.setState({cars: this.data});
            });
    }

    addNewCar(e, car){
        this.data.push(car);
        fetch(CAR_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(
            retdata => {
                this.retrieveEndpoint(CAR_ENDPOINT);
            }
        );
        e.preventDefault();
    }

    deleteCar(e, id){
        fetch(`${CAR_ENDPOINT}/${id}` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(
            retdata => {
                this.retrieveEndpoint(CAR_ENDPOINT);
            }
        );
        // let car = this.data.find(obj => obj._id === id);
        // let removeIndex = this.data.indexOf(car);
        // this.data.splice(removeIndex, 1);
        // this.setState({cars: this.data});
        e.preventDefault();
    }

    addMaintItem(e, id, maintItem){
        let car = this.data.find(obj => obj._id === id);
        car.maintItems.push(maintItem);
        const carPut = {...car};
        delete carPut['_id'];
        fetch(`${CAR_ENDPOINT}/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carPut)
        })
        .then(
            retdata => {
                this.retrieveEndpoint(CAR_ENDPOINT);
            }
        );
        e.preventDefault();
    }
    
    deleteMaintItem(e, id, maintIndex, maintItem){
        let car = this.data.find(obj => obj._id === id);
        car.maintItems.splice(maintIndex, 1);
        const carPut = {...car};
        delete carPut['_id'];
        fetch(`${CAR_ENDPOINT}/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carPut)
        })
        .then(
            retdata => {
                this.retrieveEndpoint(CAR_ENDPOINT);
            }
        );
        e.preventDefault();
    }

    render() {
        const cars = this.state
            ? this.state.cars.map((car, i) => 
                    <div key={i}>
                        <Car index={i} {...car} deleteCar = {this.deleteCar} addMaintItem = {this.addMaintItem} deleteMaintItem = {this.deleteMaintItem} />
                    </div>
                )
            : null;
        return (
            <div>
                <h1>Auto List</h1>
                <div>
                    <NewCarForm addNewCar = {this.addNewCar}/>
                </div>
                    {cars}
            </div>
        );
    }
}