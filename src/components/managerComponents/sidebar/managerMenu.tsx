import React from "react";
import ManagerMenuItems from './managerMenuItems';
import { Link } from 'react-router-dom';
import FirebaseServices from "../../../firebase/firebaseServices";

interface ManagerMenuProps {

};

const ManagerMenu : React.FC<ManagerMenuProps> = () => {
  const auth = FirebaseServices.getAuthInstance();
  const handleLogout = () => {
    auth.signOut();
  }
  return (
    <div style={{ marginBottom: '15px', paddingBottom: '15px'}}>
      <h3 style={{color: 'magenta'}}>Manager tools</h3>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingLeft: '32%'}}>
        {
          ManagerMenuItems.map(item => {
            return (
              <span key={item.key} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <b style={{paddingRight: '5px', color: 'magenta'}}>|</b>
                <Link style={{textDecoration: 'none', color: 'orange', fontWeight: 700 }} to={item.to} >{item.name}</Link>
              </span>
            )
          })
        }
        <button onClick={() => handleLogout()}>Log out</button>
      </div>

    </div>
  );
};

export default ManagerMenu;
