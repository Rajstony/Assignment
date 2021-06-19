import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUsers } from '../redux/actions/userActions';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { useState } from 'react';


const UserDetail =()=>{
    const classes =useState();
    const user =useSelector((state)=> state.user);
    const {first_name,last_name,email,avatar}=user;
    const{userId}=useParams();
    const dispatch = useDispatch();
    console.log(user);

    const fetchUserDetail = ()=> {
        const response =  axios
        .get('https://reqres.in/api/users/${userId}').catch(err =>{
        console.log(err);
    });
    dispatch(selectedUsers(response.data));
    };
    useEffect(()=>{
        if(userId && userId !== "") fetchUserDetail();

    },[userId]);
    return(
        <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div><Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit"/>
            </Backdrop></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={avatar} />
              </div>
              <div className="column rp">
                <h1>{first_name}</h1>
                <h2>
                  <a className="ui teal tag label">${email}</a>
                </h2>
                <h3 className="ui brown block header">{last_name}</h3>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="visible content">View</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
          
        </div>
    );

};

export default UserDetail;