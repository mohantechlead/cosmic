import {useForm} from "react-hook-form"
import SideBar from "../../components/common/SideBar";
import api from "../../api";

const CreateCustomers = () => {
    const { register,
            handleSubmit, 
            formState: {errors, isSubmitting},
            } = useForm();

    const  onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        api.post("customer/", data).then((res) => {
            console.log(data)
            if(res.status === 201) alert("Customer Added")
            else alert("Failed to add customer")
        }).catch((err) => alert(err))
    }

    return (
        <div className='flex'>
          <div>
            <SideBar />
          </div>
          <div className='mt-10 flex'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text'>Add Customers</h1>
            <div className='mt-10'>
            <label className='input-label'>Customer Name</label><br />
            <input {...register("customer_name")} type= 'text' name= 'customer_name' placeholder= 'Full Name' className= "input-box" /><br />
            {errors.customer_name && (<div className="text-red-500">{errors.customer_name.message} </div>)}

            <label className='input-label'>Customer E-mail</label><br />
            <input {...register("email")} type= 'text' name= 'email' placeholder= 'ex. cosmic@gmail.com' className= "input-box" /><br />
            {errors.email && (<div className="text-red-500">{errors.email.message} </div>)}

            <label className='input-label'>Customer Phone</label><br />
            <input {...register("phone_number")} type= 'text' name= 'phone_number' placeholder= 'ex. +251 xxxxxxxx' className= "input-box" /><br />
            {errors.phone_number && (<div className="text-red-500">{errors.phone_number.message} </div>)}

            <label className='input-label'>Contact Person</label><br />
            <input {...register("contact_person")} type= 'text' name= 'contact_person' placeholder= 'Contact Person' className= "input-box" /><br />
            {errors.contact_person && (<div className="text-red-500">{errors.contact_person.message} </div>)}

            <label className='input-label'>Customer Address</label><br />
            <input {...register("customer_address")} type= 'text' name= 'customer_address' placeholder= 'Street, SubCity, City, Tin.no' className= "big-input-box" /><br />
            {errors.customer_address && (<div className="text-red-500">{errors.customer_address.message} </div>)}

            <label className='input-label'>Comments</label><br />
            <input {...register("comments")} type= 'text' name= 'comments' placeholder= '' className= "big-input-box" /><br />
        <br />
        <div className='flex mb-10'>
        <button type="submit" className='cancel-btn'>Cancel</button>
        <button disabled={isSubmitting} type="submit" className='submit-btn'>{isSubmitting? "Loading..." : "Submit"}</button>
            </div>
        
        </div>
        
        </form>
    </div>
        </div>
    )
}

export default CreateCustomers