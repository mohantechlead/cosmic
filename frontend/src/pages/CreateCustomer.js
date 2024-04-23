import React, { useState } from "react";
import UsersForm from "../components/common/UsersForm";
import axios from 'axios'

function CustomerForm(props){
    const [customername, setCustomerName] = useState("")
    const [customeremail, setCustomerEmail] = useState("")
    const [customerphone, setCustomerPhone] = useState("")
    const [customeraddress, setCustomerAddress] = useState("")
    const [comments, setComments] = useState("")

    const AddProductInfo = async () => {
        let formField = new FormData()

        formField.append('customername', customername)
        formField.append('customeremail', customeremail)
        formField.append('customerphone', customerphone)
        formField.append('customeraddress', customeraddress)
        formField.append('comments', comments)

        await axios ({
            method: 'post', 
            url: 'http://localhost:8000/api',
            data: formField
        }).then((response) => {
            console.log(response.data)
        })
    }

    let template = {
        title: "Add Customer",
        fields: [
            {
                title: "Customer Name",
                type: 'text',
                name: 'customername',
                placeholder: 'Full Name', 
                style: "input-box",
                value: "customername",
                onchange: "{(e) => setCustomerName(e.target.value)}"
            }, 
            {
                title: "Customer Email",
                type: 'text',
                name: 'customeremail',
                placeholder: 'ex. cosmic@gmail.com',
                style: "input-box", 
                value: "{customeremail}",
                onchange: "{(e) => setCustomerEmail(e.target.value)}"

            },
            {
                title: "Customer Phone",
                type: 'text',
                name: 'customerphone',
                placeholder: 'ex. +251 xxxxxxxx',
                style: "input-box",
                value: "{customerphone}",
                onchange: "{(e) => setCustomerPhone(e.target.value)}"
            },
            {
                title: "Customer Address",
                type: 'text',
                name: 'customeradress',
                placeholder: 'Street, SubCity, City, Tin.no',
                style: "big-input-box",
                value: "{customeraddress}",
                onchange: "{(e) => setCustomerAddress(e.target.value)}"
            },
            {
                title: "Comments",
                type: 'text',
                name: 'customercomment',
                placeholder: '',
                style: "big-input-box",
                value: "{comments}",
                onchange: "{(e) => setComments(e.target.value)}"
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