import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const OutlinedCard = ({startDate,dueDate,title,description,status}) => {

    const borderColor = status === 'Completed'? 'border-success' : 'border-secondary';

    const card = (
        <div>
            <CardContent>
                <div className="row ">
                    <div className="col text-left">
                        <small className="badge badge-pill bg-info text-dark"><span>Start : </span>{startDate}</small>
                    </div>
                    <div className="col text-right">
                        <small className="badge badge-pill bg-warning"><span>Due : </span>{dueDate}</small>
                    </div>
                </div>
                <div className="row mt-2">
                    <h5 className="card-title text-secondary">{title}</h5>
                </div>


                <p className="card-text flex-wrap" style={{wordWrap: 'break-word'}}>{description}</p>


            </CardContent>
            <CardActions className="d-flex align-content-center justify-content-center">
                <button href="/" className="btn btn-sm btn-success card-link"

                >
                    Complete
                </button>
                <button href="/" className="btn btn-sm btn-danger card-link"

                >
                    Delete
                </button>
            </CardActions>
        </div>
    );


    return (

        <Box sx={{minWidth: 275, maxWidth: 310}} className={`shadow border p-1 rounded-3 border-2 ${borderColor}`}>
            <Card variant="outlined">{card}</Card>
        </Box>


    );
};

export default OutlinedCard