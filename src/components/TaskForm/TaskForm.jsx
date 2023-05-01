import React from 'react';
import TextField from '@mui/material/TextField';
import {Box} from "@mui/material";
import DatePickerValue from "../DatePicker/DatePicker";
import {useFormik} from "formik";


function TaskForm(props) {

    return (
        <div className="d-flex  align-items-center justify-content-center  " style={{height:'80vh'}}>
        <form className="shadow-lg rounded-4 p-5">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 2, width: '30vw'},
                }}
                noValidate
                autoComplete="off"
            >
                <h3 className="text-center">Add New Task ...</h3>

                <div>
                    <DatePickerValue
                    label="Task Start Date"
                    />
                </div>

                <div>
                    <TextField
                        label="Title"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                </div>

                <div>
                    <TextField
                        label="Description"
                        id="fullWidth"
                        defaultValue=""
                        size="small"
                    />
                </div>

                <div>
                    <DatePickerValue
                        label="Task Due Date"
                    />
                </div>

                <div className="d-flex  align-items-center justify-content-center">
                    <button type="button" className="btn  btn-success    align-items-center">
                        Submit
                    </button>
                </div>

            </Box>
        </form>
        </div>

    );
}

export default TaskForm;