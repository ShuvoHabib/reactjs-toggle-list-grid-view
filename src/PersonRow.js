import React, { Component } from "react";
import "./App.css";
import workorder from "./workorder";

const PersonRow = (props) => {
    return (
        <div className="item  col-xs-6 col-sm-4 col-md-4 col-lg-3">
            <div className="thumbnail">
                <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                        {props.data.title}</h4>
                    <p className="group inner list-group-item-text">
                        {props.data.id}</p>
                    <p>{props.data.id}</p>
                    <p>{props.data.status}</p>
                    <p>
                        {props.data.status}
                    </p>
                    <p>
                        {props.data.address1}
                        {props.data.address2}
                    </p>
                    <p>
                        {props.data.pay_amount}
                        {props.data.pay_type}
                    </p>
                    <p>
                        {props.data.service_date}
                        {props.data.service_time}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PersonRow;
