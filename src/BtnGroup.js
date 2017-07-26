import React  from "react";
import PropTypes from 'prop-types';
import "./App.css";

const BtnGroup = (props) => {
    return (
        <div className="btn-group" >
            <span onClick={props.handleList} id="list" className="btn btn-default btn-xs">
                <i className="glyphicon glyphicon-th-list"/> List
            </span>
            <span onClick={props.handleGrid} id="grid" className="btn btn-default btn-xs">
                <i className="glyphicon glyphicon-th"/> Grid
            </span>
        </div>
    );
};

BtnGroup.propTypes = {
    handleList: PropTypes.func,
    handleGrid: PropTypes.func,
};

export default BtnGroup;
