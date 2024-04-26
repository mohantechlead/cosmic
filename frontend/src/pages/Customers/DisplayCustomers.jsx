import SideBar from "../../components/common/SideBar";
import { useEffect, useState } from "react";
import api from '../../api'



function DisplayCustomers(){
    const [customer, setCustomer] = useState([]);

    const GetData = () => {
        api.get("customer/")
           .then((res) => res.data)
           .then((data) => {setCustomer(data);})
           .catch((err) => alert(err));
    }

    const deleteCustomer = (customer_id) => {
      api.delete("/customer/${customer_id}/")
      .then((res) => {
        console.log(res);
      })     
  }
       useEffect(() => {
            GetData();
        },[])

    return (
        <div className='flex'>
          <div>
            <SideBar />
          </div>
          <div className=''>
       
        <h1 className="text">Customers</h1>
        <table className="tableC">
          <thead className="table-head">
            <tr className="table-row">
              <td className="head-row">No</td>
              <td className="head-row">Name</td>
              <td className="head-row">Email</td>
              <td className="head-row">Phone</td>
              <td className="head-row">Contact Person</td>
              <td className="head-row">Address</td>
              <td className="head-row">Created At</td>
              <td className="head-row">Actions</td>
            </tr>                   
          </thead>
          <tbody>
            {
              customer.map((user, index) => {
                return <tr key={index}>
                  <td className="f-body-row">{user.customer_id}</td>
                  <td className="body-row">{user.customer_name}</td>
                  <td className="body-row">{user.email}</td>
                  <td className="body-row">{user.customer_phone}</td>
                  <td className="body-row">{user.contact_person}</td>
                  <td className="body-row">{user.contact_address}</td>
                  <td className="body-row">{user.created_at}</td>
                  <tr className="body-row">
                  <td><button className="view-btn">View</button></td>
                  <td><button className="edit-btn">Edit</button></td>
                  <td><button className="delete-btn" onClick={() => deleteCustomer(user.customer_id)}>Delete</button></td>
                  </tr>
                  
                </tr>
              })
            }        
          </tbody>
        </table>         

        </div>  
        </div> 
    )
}

export default DisplayCustomers