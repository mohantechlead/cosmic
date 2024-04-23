import React, { useState } from "react";
import UsersForm from "../components/common/UsersForm";

function CreateUser(props){

    let template = {
        title: "Create Customer",
        fields: [
            {
                title: "Full Name",
                type: 'text',
                name: 'fullname',
                placeholder: 'Full Name', 
                style: "input-box"
            }, 
            {
                title: "User Name",
                type: 'text',
                name: 'username',
                placeholder: 'User Name', 
                style: "input-box"
            },
            {
                title: "Password",
                type: 'password',
                name: 'userpassword',
                placeholder: 'Enter password',
                style: "input-box"
            },
            {
                title: "Role",
                type: 'text',
                name: 'userrole',
                placeholder: 'Pick admin, customer or staff',
                style: "input-box"
            },
        ]
    }

    return (
        <UsersForm 
        template = {template} 
        />
    )
}

export default CreateUser