import React from "react";
import { Box, Button, Card, CardContent, Grid, TextField} from '@material-ui/core';
import { useForm } from '@formspree/react';
import { Stack } from '@mui/material';

import { Send } from '@material-ui/icons';

import Alert from '@mui/material/Alert';

export default function Form(props) {
    const { useState } = React;

    const initialState = {
        name: "",
        _replyto: "",
        message: "",
    }

    const [
        { name, _replyto, message },
        setState
    ] = useState(initialState)

    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ENDPOINT, {});

    const onChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const classes = props.style()

    return (

        <Box
            component="form"
            style={{ width: "100%" }}
            noValidate
            onSubmit={handleSubmit}
        >
            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", marginBottom: "10rem" }}>
                {state.succeeded !== true ? <CardContent>
                <Stack spacing={2}>
                    <TextField
                        id="name"
                        label="Name"
                        name="name"
                        focused
                        value={name}
                        style={{ borderColor: "white" }}
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={onChange}
                        color="secondary"
                    />
                    {state.errors.length !== 0 ? <Alert severity="error">Check your email</Alert> : ""}
                    <TextField
                        id="email"
                        label="email"
                        name="_replyto"
                        focused
                        color="secondary"
                        value={_replyto}
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={onChange}
                    />
                    <TextField
                        id="message"
                        name="message"
                        label="Message"
                        variant="standard"
                        color="secondary"
                        focused
                        multiline
                        InputProps={{
                            className: classes.input
                        }}
                        rows={5}
                        value={message}
                        onChange={onChange}
                    />
                </Stack>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={3}>
                        <Button type="submit" size="large" color="primary">
                            Send <Send />
                        </Button>
                    </Grid>
                </Grid>
            </CardContent> : 
            <Alert severity="success">Thank you for reaching out! I will be in touch.</Alert>
            }
            </Card>
        </Box>
    );
}
