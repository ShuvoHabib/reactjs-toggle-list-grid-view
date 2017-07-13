import React, {Component} from "react";
import classNames from 'classnames';
import "./App.css";
import WorkOrders from "./WorkOrders";
import ProductRow from "./ProductRow";

class App extends Component {
    state = {
        listView: true,
        gridView: false,
        value: 'John Doe',
        modalVisibility: false,
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
    showModal = () => {
        this.setState({
            modalVisibility: true,
        })
    };
    hideModal = () => {
        this.setState({
            modalVisibility: false,
        })
    };
    handleSubmit = (event) => {
        this.setState({
            value: event.target.value,
            modalVisibility: true,
        });
    };

    render() {
        let modalStyle = this.state.modalVisibility ? 'block' : "none";
        let btnClass = classNames('item', {
            'list-group-item': this.state.listView,
            'grid-group-item': this.state.gridView,
        });
        let rows = WorkOrders.map(person => {
            return <ProductRow
                key={person.id}
                data={person}
                listView={this.state.listView}
                gridView={this.state.gridView}
            />
        });
        return <div className="container-fluid">
            <div className="modal fade bs-example-modal-sm in" tabindex="-1" style={{'display': modalStyle}}>
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="mySmallModalLabel">Edit Name</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Name
                                        <input type="text" name="name" id="name" value={this.state.value}
                                               className="form-control"/>
                                    </label><br />
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.hideModal} type="button" className="btn btn-default"
                                    data-dismiss="modal">Cancel
                            </button>
                            <button onSubmit={this.hideModal} type="button" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <header>
                        <img src="fn-logo.png" alt="Field Nation"/>
                    </header>
                </div>
                <div className="row row-eq-height gray-bg">
                    <div className="col-sm-3 sidebar ">
                        <div className="media user-details">
                            <div className="media-left">
                                <a href="#">
                                    <img className="media-object" width="80" src="user.png" alt="User"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{this.state.value}</h4>
                                <span>547</span>
                            </div>
                            <div className="media-right">
                                <button onClick={this.showModal} type="button" className="btn btn-default tt-btn">
                                    Edit
                                </button>
                                <p className="toolTip-show">Click to edit name</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="btn-group">
                        <span onClick={this.handleList} id="list" className="btn btn-default btn-sm">
                            <i className="glyphicon glyphicon-th-list"/>List
                        </span>
                            <span onClick={this.handleGrid} id="grid" className="btn btn-default btn-sm">
                            <i className="glyphicon glyphicon-th"/>Grid
                        </span>
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
        </div>

    }
}


export default App;
