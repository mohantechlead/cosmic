import {useForm} from "react-hook-form"
import SideBar from "../../components/common/SideBar";
import api from "../../api";

const CreateSupplier = () => {
    
    const { register,
            handleSubmit, 
            formState: {isSubmitting},
            } = useForm({});

    const  onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        api.post("supplier/", data).then((res) => {
            console.log(data)
            if(res.status === 201) alert("Supplier Added")
            else alert("Failed to add supplier")
        }).catch((err) => alert(err))
    }

    return (
        <div className='flex'>
          <div>
            <SideBar />
          </div>
          <div className='mt-10 flex'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text'>Add Suppliers</h1>
            <div className='mt-10'>
            <label className='input-label'>Supplier Name</label><br />
            <input type='text' name="supplier_name" placeholder= 'Full Name' className= "input-box"  {...register("supplier_name", { required: true })} /><br />
            {/* {errors.supplier_name && (<div className="text-red-500">{errors.supplier_name.message} </div>)} */}

            <label className='input-label'>Supplier E-mail</label><br />
            <input {...register("email")} type= 'text' name= 'email' placeholder= 'ex. cosmic@gmail.com' className= "input-box" /><br />
            {/* {errors.email && (<div className="text-red-500">{errors.email.message} </div>)} */}

            <label className='input-label'>Supplier Phone</label><br />
            <input {...register("phone_number")} type= 'text' name= 'phone_number' placeholder= 'ex. +251 xxxxxxxx' className= "input-box" /><br />
            {/* {errors.phone_number && (<div className="text-red-500">{errors.phone_number.message} </div>)} */}

            <label className='input-label'>Contact Person</label><br />
            <input {...register("contact_person")} type= 'text' name= 'contact_person' placeholder= 'Contact Person' className= "input-box" /><br />
            {/* {errors.contact_person && (<div className="text-red-500">{errors.contact_person.message} </div>)} */}

            <label className='input-label'>Supplier Address</label><br />
            <input {...register("supplier_address")} type= 'text' name= 'supplier_address' placeholder= 'Street, SubCity, City, Tin.no' className= "big-input-box" /><br />
            {/* {errors.supplier_address && (<div className="text-red-500">{errors.supplier_address.message} </div>)} */}

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

export default CreateSupplier