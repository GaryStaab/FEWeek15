import React from 'react';
import MaintItem from './maint-item';

export default class MaintList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props);
        return (
            <div className="container">
                <table className="table table-dark">
                    <tbody>
                        {this.props.maintList.map((maintItem, i) => {
                            return(
                                <MaintItem key={i} id = {this.props.id} maintID={i} {...maintItem} maintItem={maintItem} deleteMaintItem = {this.props.deleteMaintItem}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
