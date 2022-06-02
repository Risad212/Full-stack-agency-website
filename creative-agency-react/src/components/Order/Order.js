import React, { useState } from 'react';
import './Order.css'
import uploadFile from '../../images/icons/cloud-upload-outline 1-1.png';
import { useNavigate } from 'react-router-dom';


const Order = () => {
    const [orderInfo, setOrderInfo] = useState()
    const [orderFile, setOrderFile] = useState()
    const navigate = useNavigate()
    const handleBlur = (e) => {
       let isFormValid
      if(e.target.name === 'name'){
         isFormValid = e.target.value
      }
      if(e.target.name === 'email'){
         isFormValid = /\d{1}/.test(e.target.value)
      }
      if(e.target.name === 'service'){
         isFormValid = e.target.value
      }
      
      if(e.target.name === 'discription'){
          if(e.target.value.length > 80 && e.target.value.length < 115){
              isFormValid = e.target.value
          }
          else if(e.target.value.length < 80 && e.target.value.length > 0){
             alert('please write more discription up to 80 characters')
          } 
          else if(e.target.value.length > 115){
            alert('you can not write more discription up to 115')
          }   
      }
      if(e.target.name === 'price'){
         isFormValid = e.target.value
      }
      if(e.target.name === 'file'){
         setOrderFile(e.target.files[0])
      }
      if(e.target.name){
         isFormValid = e.target.value
      }
      if(isFormValid){
         const newOrderInfo = {...orderInfo}
         newOrderInfo[e.target.name] = e.target.value
         setOrderInfo(newOrderInfo)
      }
    }

    const handleOrderSubmit = (e) => {
       e.preventDefault()
       const formData = new FormData()
       formData.append('file', orderFile)
       formData.append('name', orderInfo.name)
       formData.append('email', orderInfo.email)
       formData.append('service', orderInfo.service)
       formData.append('discription', orderInfo.discription)
       formData.append('price', orderInfo.price)
       if(formData){
         // create fetch api for send data to servar in 
         fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
         })
         .then(res => res.json())
         .then(data => {
            if(data){
               navigate('/dashboard/servicecard')
            }
         })
         .then(error => console.log(error))
       }
    }

    return (
        <section className='order-container main-font'>
           <form onSubmit={handleOrderSubmit} className='ms-5 pt-5'>
              <div>
                 <input type="text" placeholder='Your Name' name="name" required onBlur={handleBlur}/>
              </div>
              <div>
                 <input type="text" placeholder='Your email address' name='email' required onBlur={handleBlur}/>
              </div>
              <div>
                 <input type="text" placeholder='Graphic Design' name="service" required onBlur={handleBlur}/>
              </div>
              <div>
                  <textarea placeholder='Project Details' name="discription" required onBlur={handleBlur}></textarea>
              </div>
              <div className='saparator'>
                  <input type="number" placeholder='Price' id='price' name="price" required onBlur={handleBlur}/>
                     <label className='fileStyle'><img src={uploadFile} className="pe-1"/>upload project file
                       <input type="file" onChange={handleBlur} name="file" id="img" style={{display: 'none'}}/>
                     </label>
              </div>
              <div>
                 <input type="submit" value="submit"className='btn' id="submitStyle"/>
              </div>
           </form>
        </section>
    );
};

export default Order;