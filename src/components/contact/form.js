import * as React from 'react';
import { Box, Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Stack } from '@mui/material';

import { Send } from '@material-ui/icons';

export default function Form(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };

    const classes = props.style()


    return (
        <Box
            component="form"
            style={{ width: "100%" }}
            noValidate

        >
            <Card style={{backgroundColor: "rgba(0, 0, 0, 0.3)", marginBottom: "10rem"}}>
                <CardContent>
                    <Stack spacing={2}>
                        <TextField
                            id="name"
                            label="Name"
                            autoComplete
                            focused
                            value={name}
                            style={{ borderColor: "white" }}
                            InputProps={{
                                className: classes.input
                            }}
                            onChange={handleChangeName}
                            color="secondary"
                        />
                        <TextField
                            id="email"
                            label="Email"
                            autoComplete
                            focused
                            color="secondary"
                            value={email}
                            InputProps={{
                                className: classes.input
                            }}
                            onChange={handleChangeEmail}
                        />
                        <TextField
                            id="message"
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
                            onChange={handleChangeMessage}
                        />
                    </Stack>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={3}>
                            <Button size="large" color="primary">
                                Send <Send />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
