import { React, useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Get } from 'Services/Get';
import { Delete } from '../../Services/Delete';
import { DeleteModelFromJob } from "../Components/DeleteModelFromJob";

export function DeleteModelFromJobPage()
return (
    <div>
        <DeleteModelFromJob />

    </div>
)

export function DeleteModelFromJob() {
    const [modelList, setModelList] = usestate([]);
    const [jobId, setSelectedOption] = usestate();
    const getModel = "api/models";
    const deleteModelToJob = "api/jobs" + jobId + "/model/"

    useeffect(() => {
        Get({ Endpoint: getModel })
            .then(val => {
                console.log(val);
                setModelList(val);
            });
    }, []);

    const handleDelete = (id) => {
        Delete({ Endpoint: deleteModelToJob + id })
            .then(res => {
                alert("Model is deleted from job")
            });
    }


    const handleChange = (event) => {
        setSelectedOption(event.taget.value);
    }


    return (
        <div>
            <h1> Fjerner en model fra job </h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Job</th>
                        <th>Delete Model from Job</th>
                    </tr>
                </thead>
                <tbody>
                    {modelList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td> {item.efModelId}</td>
                                <td> {item.firstName}</td>
                                <td> {item.lastName}</td>
                                <td><select value={jobId} onChange={handleChange}>
                                    <option value="1"> Job 1 </option>
                                    <option value="2"> Job 2 </option>
                                    <option value="3"> Job 3 </option>
                                    <option value="4"> Job 4 </option>
                                    <option value="5"> Job 5 </option>
                                </select> </td>

                                <td>
                                    <button onClick={() => handleDelete(item.efModelId)} type={"submit"} tabIndex="0" >Slet model fra Job</button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )

}