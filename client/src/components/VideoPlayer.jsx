import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContent';

// const useStyles = makeStyles((theme) => ({
//     video: {
//         width: '550px',
//         [theme.breakpoints.down('xs')]: {
//             width: '300px',
//         },
//     },
//     gridContainer: {
//         justifyContent: 'center',
//         [theme.breakpoints.down('xs')]: {
//             flexDirection: 'column',
//         },
//     },
//     paper: {
//         padding: '10px',
//         border: '2px solid black',
//         margin: '10px',
//     },
// }))

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    // const classes = useStyles();
    return (
        <Grid container style={{ justifyContent: 'center', xs: { flexDirection: 'column' } }}>
            {/* our own video */}
            {
                stream && (
                    <Paper style={{
                        padding: '10px',
                        border: '2px solid black',
                        margin: '10px',
                    }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay
                                style={{
                                    width: '550px',
                                    xs: { width: '300px', }
                                }} />
                        </Grid>
                    </Paper>
                )
            }
            {/* User's video */}
            {
                callAccepted && !callEnded && (
                    <Paper style={{
                        padding: '10px',
                        border: '2px solid black',
                        margin: '10px',
                    }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay style={{
                                width: '550px',
                                xs: { width: '300px', }
                            }} />
                        </Grid>
                    </Paper>
                )
            }


        </Grid>
    )
}

export default VideoPlayer