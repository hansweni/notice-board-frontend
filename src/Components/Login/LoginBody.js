import React from 'react';
import {useNavigate} from 'react-router-dom';
import style from './LoginBody.module.css';
import {useForm} from 'react-hook-form'
export default function LoginBody() {
  const{register,handleSubmit} =useForm();
  const navigate = useNavigate();
  const onSubmit =(data)=>{
    try{
       fetch('/api/admin/login',{
        method: "POST",
        body: JSON.stringify({
            UserId : `${data.userId}`,
            Password: `${data.password}`,
            DSign: "EE"
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
          if(data.message === 'Login Sucessfully'){
            navigate('/Admin');
          }else{
            alert(data.message);
          }

        })
    }catch(error){
      console.log(error);
    }
   
  } 

  return (
    <div className={style.loginBody}>
      <h2>Admin Sign In</h2>
      <form id='form' className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("userId")} placeholder="User name "></input>
        <input type="password" {...register("password")} placeholder="Password"></input> <br/>
        <button className={style.btn}> Sign In</button>
      </form>
    </div>
  )
}
