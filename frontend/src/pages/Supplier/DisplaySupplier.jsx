import SideBar from "../../components/common/SideBar";
import { useEffect, useState } from "react";
import api from '../../api'

function DisplaySupplier(){
    const [supplier, setSupplier] = useState([]);

    const GetData = () => {
        api.get("supplier/")
           .then((res) => res.data)
           .then((data) => {setSupplier(data);})
           .catch((err) => alert(err));
    }

    const deleteCustomer = (supplier_id) => {
      api.delete(`${supplier_id}/`)
      .then(() => {
        alert("Data has been deleted")
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
       
        <h1 className="text">Suppliers</h1>
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
              supplier.map((user, index) => {
                return <tr key={index}>
                  <td className="f-body-row">{user.supplier_id}</td>
                  <td className="body-row">{user.supplier_name}</td>
                  <td className="body-row">{user.email}</td>
                  <td className="body-row">{user.supplier_phone}</td>
                  <td className="body-row">{user.contact_person}</td>
                  <td className="body-row">{user.supplier_address}</td>
                  <td className="body-row">{user.date}</td>
                  <tr className="body-row">
                  <td><button className="view-btn">View</button></td>
                  <td><button className="edit-btn">Edit</button></td>
                  <td><button className="delete-btn" onClick={() => deleteCustomer(user.supplier_id)}>Delete</button></td>
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

export default DisplaySupplier