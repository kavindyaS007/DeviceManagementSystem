import React, { useEffect, useState } from "react";
import axios from "axios";

import '../../styles.css';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SingleDevice from "./singleDevice";
library.add(faSearch)
const ListDevices = () => {
    const [listDevices, setListDevices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const filteredDevices = listDevices.filter((device) => {
        return (
            device.device_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            device.device_model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            device.device_status.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

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
        return filteredDevices.map((res, i) => {
            return <SingleDevice obj={res} key={i} />
        });
    };

    return (
        <div className="table-container">
            <h2 className="device-page-title">Devices</h2>
            <hr />
            <div className="search-container row">
                <div className="col-7 device-count">
                    <p>Total devices: {filteredDevices.length}</p>
                </div>
                <div className="col-5 device-search-bar">
                    <FontAwesomeIcon className="device-search-icon" icon="search" />
                    <input className="device-search-input" type="text" placeholder="Search" 
                        onChange={handleSearchChange} value={searchQuery} />
                </div>
            </div>
            <Table striped hover className="device-table">
                <thead>
                    <tr>
                        <th>Device Model</th>
                        <th>Device Name</th>
                        <th>Device Status</th>
                        <th>Enrolled Time</th>
                        <th></th>
                        <th></th>
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