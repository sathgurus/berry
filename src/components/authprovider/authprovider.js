import React, { useState } from "react";
    import { AuthContext } from "../../context/context";
    import { message } from "antd";
    import { BEARER } from "../../constant";
    import { useEffect } from "react";
    import { getToken } from "../../helpers";
import { configData } from "../../config/config";
import axios from "axios";
    
    const AuthProvider = ({ children }) => {
      const [userData, setUserData] = useState();
      
    
      const authToken = getToken();
    
      const fetchLoggedInUser = async (token) => {
        
        try {
          const response = await axios.post(configData.Base_URL + '/berry-users', {
            headers: { Authorization: `${BEARER} ${token}` },
          });
          const data = await response.json();
    
          setUserData(data);
        } catch (error) {
          console.error(error);
          alert.error("Error While Getting Logged In User Details");
        } 
      };
    
      const handleUser = (user) => {
        setUserData(user);
      };
    
      useEffect(() => {
        if (authToken) {
          fetchLoggedInUser(authToken);
        }
      }, [authToken]);
    
      return (
        <AuthContext.Provider
          value={{ user: userData, setUser: handleUser }}
        >
          {children}
        </AuthContext.Provider>
      );
    };
    
    export default AuthProvider;
