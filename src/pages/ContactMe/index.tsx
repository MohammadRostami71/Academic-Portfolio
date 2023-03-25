import React, {useState} from "react";

import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import axios from "axios";
import firebase from "../../config/firebase";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import emailValidation from "../../utils/emailValidation";
import useStyles from "./useStyles";

const ContactMe: React.FC = () => {
    const classes= useStyles();
    const navigate = useNavigate();

    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [message,setMessage] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);

    const submitHandler = ():void => {
        setLoading(true);
        axios.post(`${firebase}/messages.json`,{
            name,
            email,
            message
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            toast.success('thank you for sending message');
            setName('');
            setEmail('');
            setMessage('');
            navigate('/portfolio');
        }).catch(() => {
            toast.error('Something Wrong! please try again');
        }).finally(() => {
            setLoading(false)
        })
    };

    return(
        <Box className={classes.container}>
            <Box className={classes.formBox}>
                <Typography variant={"h4"}>How can I help you?</Typography>
                <TextField label="Name" variant="outlined" required={true} value={name} onChange={(e) => setName(e?.target?.value)}/>
                <TextField label="E-mail" type="email" required variant="outlined" value={email} onChange={(e) => setEmail(e?.target?.value)}/>
                <TextField label="Message" variant="outlined" required multiline autoComplete="off"
                           maxRows={10} value={message} onChange={(e) => setMessage(e?.target?.value)}/>
                {loading ? <Button variant="outlined">
                    <CircularProgress /></Button> : <Button disabled={name?.trim().length < 3 || !emailValidation(email)|| message?.trim().length < 3}
                                                            onClick={submitHandler} variant="contained">Submit</Button>}
            </Box>
        </Box>
    )
};

export default ContactMe;