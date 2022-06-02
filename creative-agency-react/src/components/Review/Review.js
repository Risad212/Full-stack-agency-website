import React, { useState } from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Sidebar from '../Sidebar/SideBar';
import './Review.css'

const Review = () => {
    const [reviewInfo, setReviewInfo] = useState()

    const handleReviewBlur = (e) => {
        let isFormValid
        if(e.target.name === 'name'){
            isFormValid = e.target.value
        }
        if(e.target.name === 'companyinfo'){
            isFormValid = e.target.value
        }
        if(e.target.name === 'discription'){
            if(e.target.value.length > 100){
                alert('ýou can not write more discription up to 100 chartacter')
            }
            else if(e.target.value.length < 50 && e.target.value.length > 0){
                alert('please write more discription up to 50 chartacter')
            }
            else{
                isFormValid = e.target.value
            }
            console.log(e.target.value.length)
        }
        if(e.target.name){
            isFormValid = e.target.value
        }
        if(isFormValid){
            const newReviewInfo = {...reviewInfo}
            newReviewInfo[e.target.name] = e.target.value;
            setReviewInfo(newReviewInfo)
        }
    }

    
    // submit review Data to servar
    const handleReviewSubmit = () => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({reviewInfo})
        })
        .then(res => res.json())
        .then(err => console.log(err))
    }
    
    

   
    return (
        <section className='review' style={{overflow: 'hidden'}}>
             <div className="row">
                <div className="col-2" style={{padding: '0'}}>
                    <Sidebar />
                </div>
                <div className="col-10" style={{padding: '0'}}>
                   <DashboardNavbar name="Review"/>
                   <div className="reviw-container ps-5">
                      <form onSubmit={handleReviewSubmit} className='pt-5'>
                        <div>
                            <input type="text" name="name" placeholder='your Name' required onBlur={handleReviewBlur}/>
                        </div>
                        <div>
                            <input type="text" name="companyinfo" placeholder='Designation Company’s name,' required onBlur={handleReviewBlur}/>
                        </div>
                        <div>
                            <textarea placeholder='Description' name="discription" required onBlur={handleReviewBlur}></textarea>
                        </div>
                        <div>
                            <input type="submit" value="submit" className="btn"/>
                        </div>
                      </form>
                   </div>
                </div>
             </div>
        </section>
    );
};

export default Review;