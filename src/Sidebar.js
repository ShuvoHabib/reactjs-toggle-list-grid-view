import React from "react";
import PropTypes from 'prop-types';
import ReactTooltip from 'simple-react-tooltip'
import "./App.css";

const Sidebar = (props) => {
    return (
        <div className="col-sm-3 col-xs-12 sidebar">
            <div className="media user-details">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" width="80" src="user.png" alt="User"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{props.value}</h4>
                    <span>547</span>
                </div>
                <div className="media-right">
                    <ReactTooltip/>
                    <button onClick={props.showModal} type="button" className="btn btn-default tt-btn"
                            data-tip="Edit your Name" data-place="right">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    showModal: PropTypes.func,
    value: PropTypes.string,
};

export default Sidebar;
