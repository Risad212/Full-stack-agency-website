import React, { useState } from 'react';
import './AddService.css';
import AdminSidebar from '../adminSidebar/AdminSidebar';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import uploadFile from '../../images/icons/cloud-upload-outline 1-1.png';

const AddService = () => {
    const [addService, setAddService] = useState()
    const [addServiceFile, setAddServiceFile] = useState()

    const handleAddServiceBlur = (e) => {
         let isValidForm
         if(e.target.name === 'title'){
             isValidForm = e.target.value
         }
         if(e.target.name === 'file'){
            setAddServiceFile(e.target.files[0])
         }
         if(e.target.name === 'discription'){
             if(e.target.value.length < 80 && e.target.value.length > 0){
                 alert('please write more discription up to 80 character')
             }
             else if(e.target.value.length > 110){
                alert('you can not write more discripton up to 110 character')
            }
            else if(e.target.value.length > 80 && e.target.value.length < 110){
                isValidForm = e.target.value
            }
         }
         if(e.target.name){
             isValidForm = e.target.value
         }
         if(e.target.name){
             const newAddService = {...addService}
             newAddService[e.target.name] = e.target.value
             setAddService(newAddService)
         }
    }

    // const p = 'We craft stunning and amazing web UI, using a well drrafted U We craft stunning and amazing web UI, using a well drrafted U'

    // console.log(p.length,p)
    // send to sarver
    const handleService = () => {
        const forData = new FormData()
        forData.append('file', addServiceFile)
        forData.append('title', addService.title)
        forData.append('discription',addService.discription)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: forData
        })
        .then(res => res.json())
        .then(err => console.log(err))
    }

    return (
        <section className='addService' style={{overflow: 'hidden'}}>
        <div className="row">
           <div className="col-2" style={{padding: '0'}}>
              <AdminSidebar />
           </div>
           <div className="col-10" style={{padding: '0'}}>
              <AdminNavbar name="add service"/>
              <div className="reviw-container ps-5">
                 <div className='bg-light px-5 py-3 rounded'>
                 <form onSubmit={handleService} className='pt-5'>
                   <div>
                       <label htmlFor="">Service Title</label>
                       <input type="text" placeholder='Title' name="title" onBlur={handleAddServiceBlur} className='ms-atuo' required/>
                   </div>
                   <div>
                       <label htmlFor="">Icon</label>
                       <label className='fileStyle'><img src={uploadFile} className="pe-1"/>upload project file
                       <input type="file" onChange={handleAddServiceBlur} name="file" id="img" style={{display: 'none'}} required/>
                     </label>
                    </div>
                   <div>
                       <label htmlFor="">Service Discription</label>
                       <textarea placeholder='Enter Discription' name="discription" onBlur={handleAddServiceBlur} required></textarea>
                   </div>
                   <div className='mt-auto'>
                       <input type="submit" value="Submit" className="btn"/>
                   </div>
                 </form>
                 </div>
              </div>
           </div>
        </div>
   </section>
    );
};

export default AddService;