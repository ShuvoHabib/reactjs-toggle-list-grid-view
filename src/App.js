import React, { Component } from "react";
import "./App.css";
import workorder from "./workorder";
import PersonRow from "./PersonRow";

class App extends Component {
    handleList=()=>{
        console.log('list');
    }
    render() {
        let rows = workorder.map(person => {
            return <PersonRow key={
                person.id
            }
                data={person} />
        })
        return <div className="container">
            <div className="well well-sm">
                <strong>Display</strong>
                <div className="btn-group">
                    <span onClick={this.handleList} id="list" className="btn btn-default btn-sm">
                        <i className="glyphicon glyphicon-th-list"></i>
                        List
                    </span>
                    <span id="grid" className="btn btn-default btn-sm">
                        <i className="glyphicon glyphicon-th"></i>
                        Grid
                    </span>
                </div>
            </div>
            <div className="row auto-clear">
                {rows}
            </div>
        </div>
    }
}



export default App;
