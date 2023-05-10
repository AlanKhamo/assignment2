import React, { useEffect, useState } from "react";

function SeJobs() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:7181/api/Jobs", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>Jobs</h1>
      <button onClick={fetchData}>Get all Jobs</button>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Customer</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>startDate</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>days</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>location</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.customer}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.startDate}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.days}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.location}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default SeJobs;
