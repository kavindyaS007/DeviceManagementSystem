import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleDevice = (props) => {
    console.log(props.obj);
    const {id, model, name, status, time} = props.obj;
    console.log(props.obj.device_model);
    return (
        <tr>
            <td>{model}</td>
            <td>{name}</td>
            <td>{status}</td>
            <td>{time}</td>
            <td>
                <Link className="" to={"/edit-device/" + id}>
                    Edit
                </Link>
                <Button size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    )
};

export default SingleDevice;