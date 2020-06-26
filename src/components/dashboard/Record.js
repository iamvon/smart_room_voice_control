import React, { useState } from 'react'
import { ReactMic } from 'react-mic';
import { Button } from 'reactstrap';

const Record = (props) => {
    const [recording, setRecording] = useState(false)

    function onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob)
    }

    function onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob)
    }

    return (
        <>
            <ReactMic
                {...props}
                record={recording}
                onStop={onStop}
                onData={onData}
                strokeColor="#e32020"
                backgroundColor="#0f0000" />
            <Button
                style={{marginLeft: 100}}
                color="success"
                onClick={() => setRecording(!recording)}
                type="button">

                {recording ? "Stop" : "Record"}
            </Button>
        </>
    )
}

export default Record