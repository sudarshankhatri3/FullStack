import React from "react";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 



export default function ProductView(){
    const {userId}=useParams();
    console.log(userId)

    return (
        <div>
        <h1>User Profile</h1>
        <p>Now viewing user with ID: {userId}</p>
        </div>
    )
}