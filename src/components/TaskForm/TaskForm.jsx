import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Box} from "@mui/material";
import DatePickerValue from "../DatePicker/DatePicker";
import Snackbar from "../SnackBar/SnackBar"
import {useFormik} from "formik";
import axios from "axios";
import {v4 as uuid4} from "uuid";
import {Link} from "react-router-dom";


function TaskForm() {

    const [msg, setMsg] = useState('');

    const initialValues = {
        startDate: "", title: "", description: "", dueDate: ""
    }
    const validate = (values) => {
        let errors = {}

        if (!values.startDate) {
            errors.startDate = "StartDate Can Not be Blank";
        }
        if (!values.title) {
            errors.title = "Title is empty , Check Again!!"
        }
        if (!values.description) {
            errors.description = "Description is Empty. Check Again!!"
        }
        if (!values.dueDate) {
            errors.dueDate = "Due Date is empty,Check Again!!"
        }
        return errors;
    }

    const onSubmit = (values,{resetForm}) => {

        const taskId = uuid4();

        const apiURL = `https://task-list-5a410-default-rtdb.firebaseio.com/tasks/${taskId}.json`;

        const task = {
            ...values,
            status: 'New',
            id: taskId,
        }
        axios.put(apiURL, task).then((res) => {
            if (res.status === 200) {
                setMsg('Task Saved Successfully ...');
               resetForm({values:''})
            }
        }).catch((err) => {
            setMsg('Something Went wrong Not Saved !!!')
        })
    }


    const formik = useFormik({
        initialValues, onSubmit, validate,
    });


    const newMsg = <Link to="/" className="link-warning">All Tasks</Link>
    return (
        <>
            <div className="d-flex  align-items-center justify-content-center  " style={{height: '80vh'}}>
                <Box
                    className="shadow-lg rounded-4 p-5"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 2, width: '30vw'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                >
                    <h3 className="text-center">Add New Task ...</h3>
                    <div>
                        <DatePickerValue
                            label="Task Start Date"
                            name="startDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.startDate}
                            helperText={formik.errors.startDate && formik.touched.startDate ? formik.errors.startDate : ""}
                        />


                    </div>
                    <div>
                        <TextField
                            label="Title"
                            id="outlined-size-small"
                            name="title"
                            value={formik.values.title}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.title && formik.touched.title ?
                                <span className="small text-danger">{formik.errors.title}</span> : null}
                        />


                    </div>
                    <div>
                        <TextField
                            label="Description"
                            id="fullWidth"
                            name="description"
                            value={formik.values.description}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.description && formik.touched.description ?
                                <span className="small text-danger">{formik.errors.description}</span> : null}
                        />

                    </div>
                    <div>
                        <DatePickerValue
                            label="Task Due Date"
                            name="dueDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dueDate}
                            helperText={formik.errors.dueDate && formik.touched.dueDate ? formik.errors.dueDate : ""}
                        />


                    </div>
                    <div className="d-flex  align-items-center justify-content-center">
                        <button type="submit" className="btn   mt-4 btn-success align-items-center">
                            Submit
                        </button>
                    </div>
                </Box>
            </div>

            {msg ? <Snackbar severity="success" message={msg} linkMsg={newMsg}/> : ""}

        </>
    )

}

export default TaskForm;