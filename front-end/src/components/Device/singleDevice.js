import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

const SingleDevice = (props) => {
    const {device_id, device_model, device_name, device_status, enrolled_time} = props.obj;

    const deleteDevice = () => {
        axios.delete(
            "http://localhost:8080/delete-device/" + device_id
        ).then((res) => {
            if(res.status === 200) {
                alert("Device deleted successfully");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err) => alert("Something went wrong"));
    };

    return (
        <tr>
            <td>{device_model}</td>
            <td>{device_name}</td>
            <td>{device_status}</td>
            <td>{enrolled_time}</td>
            <td>
                <Button className="button" size="sm" variant="warning" href={"/edit-device/" + device_id}>
                    Edit
                </Button>                           
            </td>
            <td>
                <Button onClick={deleteDevice} className="button" size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    )
};

export default SingleDevice;