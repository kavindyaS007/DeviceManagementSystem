import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup } from "react-bootstrap";

import '../../styles.css';
import "bootstrap/dist/css/bootstrap.css"

const DeviceForm = (props) => {
    const validationSchema = Yup.object().shape({
        device_model: Yup.string().required("Required"),
        device_name: Yup.string().required("Required"),
        device_status: Yup.string().required("Required"),
        // enrolled_time: Yup.string().required("Required"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        values.enrolled_time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false});
        props.onSubmit(values);
        setSubmitting(false);
      };

    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <FormGroup>
                        <label>Device Model</label>
                        <Field name="device_model" type="text" className="form-control" />
                        <ErrorMessage name="device_model" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Device Name</label>
                        <Field name="device_name" type="text" className="form-control" />
                        <ErrorMessage name="device_name" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Device Status</label>
                        <Field name="device_status" as="select" className="form-control">
                            <option hidden default>--Select Status--</option>
                            <option disabled>--Select Status--</option>
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="INACTIVE">INACTIVE</option>
                            <option value="ENROLLED">ENROLLED</option>
                        </Field>
                        <ErrorMessage name="device_status" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <Button variant="success" size="md" block="block" type="submit">{props.children}</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default DeviceForm;