import React, {Component} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./App.css";

const ProductRow = (props) => {
    let btnClass = classNames('',{
        'thumbnail': props.listView,
        ' col-xs-6 col-sm-4 col-md-4 col-lg-3': props.gridView,
    });
    let statusClass = classNames('list-status list-text-block',{
        'draft-color': props.data.status === 'Draft',
        'published-color': props.data.status === 'Published',
        'routed-color': props.data.status === 'Routed',
        'work-color': props.data.status === 'Work Done',
        'assigned-color': props.data.status === 'Assigned',
    });
    return (
        <div className={btnClass}>
            <div className="caption">
                <h4 className="group inner list-group-item-heading list-text-block">
                    {props.data.title}</h4>
                <p className="group inner list-group-item-text list-group-item-id list-text-block">
                    {props.data.id}
                </p>
                <p className={statusClass}>{props.data.status}</p>
                <p className="list-address list-text-block">
                    {props.data.address1}
                    {props.data.address2}
                </p>
                <p className="list-amount list-text-block">
                    {props.data.pay_amount}<br/>
                    {props.data.pay_type}
                </p>
                <p className="list-date list-text-block">
                    {props.data.service_date}<br/>
                    {props.data.service_time}
                </p>
            </div>
        </div>
    );
};

ProductRow.propTypes = {
    listView: PropTypes.bool,
    gridView: PropTypes.bool,
};

export default ProductRow;
