import React,{useEffect} from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/userActions';
import UserComponent from "../containers/UserComponent";

const UserListing =()=>{
    const users= useSelector((state)=> state);
    const dispatch = useDispatch();
    const fetchUsers = async()=>{
        const response = await axios.get("https://reqres.in/api/users?delay=3").catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setUsers(response.data));
    };

    useEffect(()=>{
        fetchUsers();
    },);
    console.log("User:",users);
    return(
        <div className="ui grid container">
            <UserComponent />
        
        </div>
    );

};

export default UserListing;