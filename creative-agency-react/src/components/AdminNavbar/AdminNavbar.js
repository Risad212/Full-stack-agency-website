import React from 'react';

const AdminNavbar = (props) => {
    const name = props.name
    return (
        <div className="py-3">
             <div className="container d-flex justify-content-between">
                <h4>{name}</h4>
                <h5>Sufi Ahmed</h5>
              </div>
           </div>
    );
};

export default AdminNavbar;