import { React, useEffect, useState } from "react";
import "./App.css";
import auth from "./firebase";
import GetUser from "./componentes/GetUser";
import { Private } from "./Routes/private/private";
import { Public } from "./Routes/public/public";

let Email = null;


const App = () => {
	let Us
	const [usuario, setUsuario] = useState({ Usuario: "" });
	const [authentication, setAuthState] = useState({
		authenticated: false, //whether the user is allowed to access the protected routes
		initialized: true, //if firebase is still being nitalized
	});

  const logout = () => {
    console.log("error...");
    auth
      .signOut()
      .then(() => {
        console.log("saliiendooPo...." + authentication.authenticated);
        setAuthState({
          authenticated: false, //the user is no longer authenticated
          initialized: false,
        });

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    console.log("saliiendooP...." + authentication.authenticated);
  };

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        if (user) {
          //the user has been logged in
          setAuthState({
            authenticated: true, //the user is now authenticated
            initialized: false,
          });
          Us = user.email;
		  
          //console.log(`holiiii ${User}`);
          setUsuario({ Usuario: Us });
		  
        } else {
          //the user has been logged out
          setAuthState({
            authenticated: false, //the user is no longer authenticated
            initialized: false,
          });
        }
        //console.log(authentication.authenticated);
      }),
    [setAuthState]
  );

  
  
    
   


  return (
    <>
      {authentication.authenticated ? (
        <Private User={usuario.Usuario} logout={logout} />
      ) : (
        <Public />
      )}
     <GetUser perro="Calahan"/>
      
    </>
  );
};




export default App;




