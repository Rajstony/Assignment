import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserComponent =()=>{
    const users= useSelector((state)=> state.allUsers.user);
    const renderList = users.map((user)=>
    {
        const {id,first_name,last_name,email,avatar}=user;
        return(<div  className="four column wide" key={id}>
            <Link to={'/user/${id}'}>
        <div className="ui link cards">
            <div className="card">
                <div className="avatar">
                    <img src={avatar} alt={first_name}/>
                </div>
                    <div className="content">
                        <div className="header">{first_name}</div>
                        <div className="meta">{last_name}</div>
                        <div className="email">{email}</div>
                        
                    </div>
                
            </div>
        </div>
        </Link>
    </div>
    );
    });

    
    return <>{renderList}</>;

};

export default UserComponent;