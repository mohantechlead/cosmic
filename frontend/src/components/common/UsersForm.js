import React from 'react'
import {useForm} from 'react-hook-form';
import SideBar from '../SideBar';

function UsersForm ({template}){

    let { register, handleSubmit } = useForm();
    let {title,  fields} = template;

    const renderFields = (fields) => {
      return fields.map(field => {
        let {title, type, name, placeholder, style, onchange, value} = field;
        return (
          <div key={name} >
            <label htmlFor='{name}' className='input-label'>{title}</label>
            <br />
            <input className={style} type='text' placeholder={placeholder} name={name} id={name} ref={register("name")}
                    value={value} onchange= {onchange}
            ></input>
          </div>
        )
      })
    }

      return (
        <div className='flex'>
          <div>
            <SideBar />
          </div>
          <div className='mt-4 flex'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <h1 className='text'>{title}</h1>
            <div className='mt-10'>
            {renderFields(fields)}
        <br />
        <div className='flex'>
        <button type="submit" className='cancel-btn'>Cancel</button>
        <button type="submit" className='submit-btn'>Submit</button>
            </div>
        
        </div>
        
        </form>
    </div>
        </div>
    
  )
}

function onSubmit(values) {
  console.log(values);
}

export default UsersForm