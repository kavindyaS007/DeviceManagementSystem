import React, { useState } from "react";
import axios from "axios";
import DeviceForm from "./deviceForm";
import "bootstrap/dist/css/bootstrap.css"

const AddDevice = () => {

    const [formValues] = useState({device_model: '', device_name: '', device_status: '', enrolled_time: ''})
    const onSubmit = deviceObject => {
        axios.post(
            "http://localhost:8080/add-device", deviceObject
        ).then(res => {
            if(res.status === 200){
                alert('Device added successfully')
                window.location.reload()
            }
            else{
                Promise.reject()
            }
        })
        .catch(err => alert("Something went wrong"))
    }

    return (
        <DeviceForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Add Device            
        </DeviceForm>
    )
}

export default AddDevice;