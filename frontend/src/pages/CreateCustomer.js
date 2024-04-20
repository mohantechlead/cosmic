import React from "react";
import UsersForm from "../components/common/UsersForm";

function CustomerForm(props){

    let template = {
        title: "Add Customer",
        fields: [
            {
                title: "Customer Name",
                type: 'text',
                name: 'customername',
                placeholder: 'Full Name', 
                style: "input-box"
            }, 
            {
                title: "Customer Email",
                type: 'text',
                name: 'customeremail',
                placeholder: 'ex. cosmic@gmail.com',
                style: "input-box"
            },
            {
                title: "Customer Phone",
                type: 'text',
                name: 'customerphone',
                placeholder: 'ex. +251 xxxxxxxx',
                style: "input-box"
            },
            {
                title: "Customer Address",
                type: 'text',
                name: 'customeradress',
                placeholder: 'Street, SubCity, City, Tin.no',
                style: "big-input-box"
            },
            {
                title: "Comments",
                type: 'text',
                name: 'customercomment',
                placeholder: '',
                style: "big-input-box"
            },
        ]
    }

    return (
        <UsersForm 
        template = {template}
        />
    )
}

export default CustomerForm