import React from "react";
import { json } from "react-router-dom";

export async function Delete({ Endpoint, object }) {
    var bodyPost = null;
    if (object !== undefined) {
        bodyPost = JSON.stringify(object);
    }

    var url = "https://localhost:7181/" + Endpoint; // Stien fra API + EndPoint
    var res = await fetch(url, {
        method: "DELETE",
        body: bodyPost,
        credentials: "include",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    });
    return res.status;
}
