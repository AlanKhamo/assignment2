import { React, useEffect, useState } from "react";
import SeeJob from "Components/SeeJob";
import { Get } from "/Services/Get";
import { Table } from "react-bootstrap";

export function SeeJob() {
    return (
        <div>
            <SeeJobs />
        </div>
    );
}
export function SeeJobs() {
    const [jobsList, setJobList] = useState([]);
    const getJobs = "api/Jobs"

    useEffect(() => {
        Get({ Endpost: getJobs }).then((value) => {
            setJobList(value);
        });
    }, []);


    return (
        <div>
            <h3>Alle jobs </h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Start date</th>
                        <th>Location</th>
                        <th>Days</th>
                        <th>Comments</th>
                    </tr>
                </thead>

                <tbody>
                    {jobsList.map((item) => {
                        return (
                            <tr key={item.jobId}>
                                <td>{item.customer}</td>
                                <td>{item.startDate}</td>
                                <td>{item.location}</td>
                                <td>{item.days}</td>
                                <td>{item.comments}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default SeeJob;