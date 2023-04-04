import React, { useEffect, useState } from "react";
import axios from "axios";
import DeviceForm from "./deviceForm";
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate, useParams } from "react-router-dom";

const EditDevice = (props) => {

    let navigate = useNavigate ();
    const [formValues, setFormValues] = useState({
        device_id: "",
        device_model: "",
        device_name: "",
        device_status: "",
        enrolled_time: ""
    });
    const { device_id } = useParams();
    const onSubmit = (deviceObject) => {
        axios.put("http://localhost:8080/edit-device/" + device_id,
            deviceObject)
        .then((res) => {
            console.log(res)
            if(res.status === 200) {
                alert("Device updated successfully");
                navigate("/devices");
            }
            else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/all-devices/" + device_id)
        .then((res) => {
            const {device_id, device_model, device_name, device_status, enrolledTime} = res.data;
            setFormValues({device_id, device_model, device_name, device_status, enrolledTime});
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <DeviceForm initialValues = {formValues}
            onSubmit = {onSubmit}
            enableReinitialize>
                Update
        </DeviceForm>
    )
}

export default EditDevice;