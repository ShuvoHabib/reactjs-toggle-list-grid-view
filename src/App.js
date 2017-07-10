import React, { Component } from "react";
import "./App.css";
import workorder from "./workorder";
import PersonRow from "./PersonRow";

class App extends Component {
    state = {
        listView: true,
        gridView: false,
    }
    handleList = () => {
        this.setState({
            listView: true,
            gridView: false,
        })
    };
    handleGrid = () => {
        this.setState({
            listView: false,
            gridView: true,
        })
    };
    render() {
        
        let rows = workorder.map(person => {
            return <PersonRow 
                key={person.id}
                data={person} 
                listView={this.state.listView}
                gridView={this.state.gridView}
            />
        })
        return <div className="container">
            <div className="well well-sm">
                <strong>Display</strong>
                <div className="btn-group">
                    <span onClick={this.handleList} id="list" className="btn btn-default btn-sm">
                        <i className="glyphicon glyphicon-th-list"></i>
                        List
                    </span>
                    <span onClick={this.handleGrid} id="grid" className="btn btn-default btn-sm">
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
