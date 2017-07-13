import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./App.css";
import WorkOrders from "./WorkOrders";
import ProductRow from "./ProductRow";

const MainContainer = (props) => {
    let btnClass = classNames('item', {
        'list-group-item': props.listView,
        'grid-group-item': props.gridView,
    });
    let rows = WorkOrders.map(person => {
        return <ProductRow
            key={person.id}
            data={person}
            listView={props.listView}
            gridView={props.gridView}
        />
    });
    return (
        <div className="col-sm-9">
            <div className="btn-group">
                <span onClick={props.handleList} id="list" className="btn btn-default btn-sm">
                    <i className="glyphicon glyphicon-th-list"/>List
                </span>
                <span onClick={props.handleGrid} id="grid" className="btn btn-default btn-sm">
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
    );
};

MainContainer.propTypes = {
    showModal: PropTypes.func,
    value: PropTypes.string,
};

export default MainContainer;
