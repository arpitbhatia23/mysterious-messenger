import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAuth } from '../apis/auth.api';
import { logout as authLogout } from "../store/slice.js";
import toast from 'react-hot-toast';

const Logout = ({ className }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logouthandler = (event) => {
      event.stopPropagation(); 
      console.log('Logout clicked');
        logout()
            .then((userdata) => {
                console.log(userdata);
                if (userdata.success === true) {
                    dispatch(authLogout());
                    toast.success(userdata.message);
                    navigate("/login");
                }
            })
            .catch((error) => {
                toast.error("Logout failed!");
                console.error("Logout Error: ", error);
            });
    };

    return (
        <div>
            <div className={`${className} flex cursor-pointer z-50`} onClick={logouthandler}>
                LOGOUT
            </div>
        </div>
    );
};

export default Logout;
