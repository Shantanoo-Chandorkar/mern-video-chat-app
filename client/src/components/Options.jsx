import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContent';


const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container style={{
            width: '600px',
            margin: '35px 0',
            padding: 0,
            xs: { width: '80vh' },
        }}>
            <Paper elevation={10} style={{
                padding: '10px 20px',
                border: '2px solid black'
            }}>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                }} noValidate autoComplete='off'>
                    <Grid container style={{
                        width: '100%',
                        xs: { flexDirection: 'column' }
                    }}>
                        <Grid item xs={12} md={6} style={{ padding: 20, }}>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} style={{ marginTop: 20, }}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />}></Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ padding: 20, }}>
                            <Typography gutterBottom variant='h6'>Make a Call</Typography>
                            <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant='contained' color='secondary'
                                    startIcon={<PhoneDisabled fontSize='large' />}
                                    onClick={leaveCall}
                                    style={{
                                        marginTop: 20,
                                        width: '100%',
                                    }}
                                    fullWidth
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    variant='contained' color='primary'
                                    startIcon={<Phone fontSize='large' />}
                                    onClick={() => callUser(idToCall)}
                                    style={{
                                        marginTop: 20
                                    }} fullWidth
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper >
        </Container >
    )
}

export default Options