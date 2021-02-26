import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import logo from '../../grillNFishLogo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext); //user context API

    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const [newAccount,setNewAccount]=useState(true)
    const [matched,setMatched]=useState(true)

    const [user,setUser]=useState({           //user state containing user info

        name:'',
        email:'',
        password:'',
        success:false,
    })
  
const handleChange=(e)=>{                  //getting user input and validate. Then setting to the state.
    
    let regexValid=false;
    
    if (e.target.name==="email"){
         const isEmailValid=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);

        isEmailValid===false && setMatched(false)
    }

    // if (e.target.name==="password") {
    //   const isPasswordValid= /^(?=.*[0-9])(?=.*[!@#$%^&/*])[a-zA-Z0-9!@#$%^&/*]{6,16}$/.test(e.target.value);
    //   isPasswordValid===false && setMatched(false)
      
    // }
    if (e.target.name==="confirmPassword") {
        regexValid= /^(?=.*[0-9])(?=.*[!@#$%^&/*])[a-zA-Z0-9!@#$%^&/*]{6,16}$/.test(e.target.value);

        const againPassword=e.target.value;

        if (againPassword===user.password && regexValid===true) {
          
            setMatched(true)
        }
        else{
            setMatched(false)
            alert("Password didn't matched or has no number or special character or invalid email")
        }
    }
//  console.log(matched);
    if(matched===true){
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser)
    }   
}
//  console.log(user);

 const handleSubmit=(e)=>{                 //handle submitting by creating account or logging in the user.
           if (newAccount && user.email && user.confirmPassword) {

            firebase.auth().createUserWithEmailAndPassword(user.email,user.confirmPassword)
        .then(res => {
           const newUser={...user};
           newUser.error='';
           newUser.success=true;
           setUser(newUser);
           setLoggedInUser(newUser);
           history.replace(from);
           updateName(user.name);
        //    console.log(user.name);
        })
        .catch((error) => {

            const newUser={...user};
            newUser.error=error.message;
            newUser.success=false;
            setUser(newUser)
           
        });
    }
        // console.log(newAccount);

        if (!newAccount && user.email && user.password) {
       
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then(res => {
                const newUser={...user};
                newUser.error='';
                newUser.success=true;
                newUser.name=res.user.displayName
                setUser(newUser);
                setLoggedInUser(newUser);
                history.replace(from);
                // console.log(res.user.displayName);
            })
            .catch((error) => {
                const newUser={...user};
                newUser.error=error.message;
                newUser.success=false;
                setUser(newUser)
            });
                 }

    e.preventDefault();
 }

 const updateName=name=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name ,
    }).then( e=> {
    //   console.log("updated");
    }).catch(error=> {
    //   console.log(error);
    });
 }

    return (
        <div>
                <Form className="formArea">
                    <img src={logo} alt="logo" id="authLogo" />
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already have an account?" onClick={()=>setNewAccount(!newAccount)}/>
                </Form.Group>
                 {
                     newAccount && 
                     <Form.Group controlId="formBasicName">
                     <Form.Label className="title">Name</Form.Label>
                     <Form.Control type="text" placeholder="Name" name="name"  onBlur={handleChange} className="inputField"/>
                  </Form.Group>
                 }

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"  onBlur={handleChange} className="inputField"/>
                </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className="title">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"  onBlur={handleChange} className="inputField" />
                   </Form.Group>
                
                { newAccount &&
                    <Form.Group controlId="formConfirmPassword">
                    <Form.Label className="title">Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onBlur={handleChange} className="inputField"/>
                </Form.Group>
                }
                <input type="submit" value={newAccount? "Create Account" : "Sign in"} onClick={handleSubmit} id="submitBtn"></input>
                <p style={{color:"red"}}>{user.error}</p>
                {user.success && <p style={{color:'rgb(145, 235, 11)'}}>{newAccount? "Account created successfully" : "Logged in successfully"}</p> }
            </Form>
        </div>
    );
};

export default Login;