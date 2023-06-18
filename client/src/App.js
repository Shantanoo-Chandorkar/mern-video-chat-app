import React from 'react';
import { Typography, AppBar } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         borderRadius: 15,
//         margin: '30px 100px',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '600px',
//         border: '2px solid black',
//         [theme.breakpoints.down('xs')]: {
//             width: '90%',
//         },
//     },
//     image: {
//         marginLeft: '15px',
//     },
//     wrapper: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100%',
//     },
// }));

const App = () => {
    // const classes = useStyles();


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}>
            <AppBar style={{
                borderRadius: 15,
                margin: '30px 100px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '600px',
                border: '2px solid black',
                xs: '90%',
            }} position='static' color='inherit' >
                <Typography variant='h2' align='center'>
                    Video Chat
                </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>

            {/* Video Player */}
            {/* Options => Notifications */}
        </div>
    )
}

export default App