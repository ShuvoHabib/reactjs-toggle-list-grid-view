import React, {Component} from "react";
import classNames from 'classnames';
import "./App.css";

const PersonRow = (props) => {
    let btnClass = classNames('thumbnail',{
        '': props.listView,
        ' col-xs-6 col-sm-4 col-md-4 col-lg-3': props.gridView,
    });
    return (
        <div className={btnClass}>
            <div className="caption">
                <h4 className="group inner list-group-item-heading list-text-block">
                    {props.data.title}</h4>
                <p className="group inner list-group-item-text list-text-block">
                    {props.data.id}
                </p>
                <p className="list-status list-text-block">{props.data.status}</p>
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
}

export default PersonRow;
