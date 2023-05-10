import React from "react";
import { json } from "react-router-dom";

export async function Get({ Endpoint }) {
    console.log("get request!");
    console.log("end point is: " + Endpoint);
    console.log("\n");

    var url = "https://localhost:7181/" + Endpoint; // Stien fra API + EndPoint
    var res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        alert("Something bad happened: " + res);
    }
    let body = await res.json();
    return body;
}
