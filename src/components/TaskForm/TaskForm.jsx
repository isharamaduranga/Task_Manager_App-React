import React from 'react';
import TextField from '@mui/material/TextField';
import {Box} from "@mui/material";
import DatePickerValue from "../DatePicker/DatePicker";
import {useFormik} from "formik";

function TaskForm() {
    const formik = useFormik({
        initialValues: {
            startDate: "",
            title: "",
            description: "",
            dueDate: ""

        }, onSubmit: (values) => {
            console.log("Form values:", values);
        },

        validate: (values) => {
            let errors = {}

            if (!values.startDate){
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
    });



    return (
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
                        helperText={formik.errors.startDate ? formik.errors.startDate : ""}
                    />


                </div>
                <div>
                    <TextField
                        label="Title"
                        id="outlined-size-small"
                        name="title"
                        defaultValue={formik.values.title}
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.title ? <span className="small text-danger">{formik.errors.title}</span> : null}
                    />


                </div>
                <div>
                    <TextField
                        label="Description"
                        id="fullWidth"
                        name="description"
                        defaultValue={formik.values.description}
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.description ? <span className="small text-danger">{formik.errors.description}</span> : null}
                    />

                </div>
                <div>
                    <DatePickerValue
                        label="Task Due Date"
                        name="dueDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dueDate}
                        helperText={formik.errors.dueDate ? formik.errors.dueDate : ""}
                    />


                </div>
                <div className="d-flex  align-items-center justify-content-center">
                    <button type="submit" className="btn   mt-4 btn-success align-items-center">
                        Submit
                    </button>
                </div>
            </Box>
        </div>)

}

export default TaskForm;