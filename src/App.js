import React, { Component } from "react";
import classNames from 'classnames';
import "./App.css";
import workorder from "./workorder";
import PersonRow from "./PersonRow";

class App extends Component {
    state = {
        listView: true,
        gridView: false,
    };
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
        let btnClass = classNames('item', {
            'list-group-item': this.state.listView,
            'grid-group-item': this.state.gridView,
        });
        let rows = workorder.map(person => {
            return <PersonRow
                key={person.id}
                data={person}
                listView={this.state.listView}
                gridView={this.state.gridView}
            />
        });
        return <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    Field Work
                </div>
                <div className="col-sm-9">
                    <div className="well well-sm">
                        <div className="btn-group">
                    <span onClick={this.handleList} id="list" className="btn btn-default btn-sm">
                        <i className="glyphicon glyphicon-th-list"/>
                        List
                    </span>
                            <span onClick={this.handleGrid} id="grid" className="btn btn-default btn-sm">
                        <i className="glyphicon glyphicon-th"/>
                        Grid
                    </span>
                        </div>
                    </div>
                    <div className={btnClass}>
                        <div className="row auto-clear">
                            <div className="table-row header caption">
                                <div className="list-group-item-heading list-text-block">Title</div>
                                <div className=" list-text-block">Id</div>
                                <div className=" list-text-block">Status</div>
                                <div className=" list-text-block">Location</div>
                                <div className=" list-text-block">Pay</div>
                                <div className="list-date list-text-block">Date/Time</div>
                            </div>
                        </div>
                        <div className="row auto-clear">
                            {rows}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default App;
