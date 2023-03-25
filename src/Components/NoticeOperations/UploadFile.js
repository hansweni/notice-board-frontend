import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
export default function UploadFiles(props) {
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate();
    
  const onSubmit = (data)=>{
      try{ 
          var url = `/api/admin/upload?RefNo=${props.RefNo}`
          const formData = new FormData();
          const fileField = document.querySelector('input[type="file"]');
          formData.append("upload", fileField.files[0]);
          
          fetch(url, {
            method: "POST",
            body: formData,
          })
           .then((response) => {
               if(response.status === 401) navigate('/login');
               return response.json();
           })
           .then((Data) =>{
                console.log(Data)
              if(Data.error === "Unexpected field"){
                  alert("Please ADD Correct Format");
              }else if(data.RefNo === Data.RefNo) {
                  alert("Added Successfully to the DataBase ");
              }
           })
       }catch(error){
          console.log(error);
           alert("Exception occured ");
      }
       }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>File will Uploaded and Linked With -  {props.RefNo}</label>
      <input type="file"></input>
      <input type="submit" />
    </form>
  );
}
