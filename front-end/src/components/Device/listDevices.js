import React, { useEffect, useState } from "react";
import axios from "axios";

import '../../styles.css';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import SingleDevice from "./singleDevice";

const ListDevices = () => {
    const [listDevices, setListDevices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/all-devices")
            .then(({ data }) => {
                setListDevices(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DeviceTable = () => {
        return listDevices.map((res, i) => {
            return <SingleDevice obj={res} key={i} />
        });
    };

    return (
        <div className="table-container">
            <h2>Devices</h2>
            <hr/>
            <Table striped hover className="table-wrapper">
                <thead>
                    <tr>
                        <th>Device Model</th>
                        <th>Device Name</th>
                        <th>Device Status</th>
                        <th>Enrolled Time</th>
                    </tr>
                </thead>
                <tbody>
                    {DeviceTable()}
                </tbody>
            </Table>
        </div>
    );
};

export default ListDevices;