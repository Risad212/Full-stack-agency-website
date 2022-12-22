import React, { createContext, useState } from 'react';
import Router from '../Route/Router';

export const DataStorge = createContext()
const Storge = () => {
    const [userInfo, setUserInfo] = useState()
    return (
        <DataStorge.Provider value={[userInfo,setUserInfo]}>
          <Router />
        </DataStorge.Provider>
    );
};

export default Storge;