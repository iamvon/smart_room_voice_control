import React, { useState } from 'react'
import "./styles/Record.css"
import AudioAnalyser from "react-audio-analyser"

const Record = (props) => {
    const [status, setStatus] = useState("")
    const [audioSrc, setAudioSrc] = useState("")
    const [audioType, setAudioType] = useState("audio/wav")
    const [textRecognized, setTextRecognized] = useState("")

    const recognizeAPI = "http://127.0.0.1:5000/api/recognize"
    const audioFile = "/home/iamvon/Downloads/record.wav"

    const audioProps = {
        audioType,
        status,
        audioSrc,
        timeslice: 1000,
        width: 287.5,
        height: 100,
        startCallback: (e) => {
            console.log("record start", e)
        },
        pauseCallback: (e) => {
            console.log("record pause", e)
        },
        stopCallback: async (e) => {
            let urlBlob = window.URL.createObjectURL(e)
            console.log("record stop", urlBlob)
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = urlBlob;
            a.download = "record.wav";
            const downloadWav = await a.click();
            window.URL.revokeObjectURL(urlBlob);

            const responseRecognizeAPI = await fetch(recognizeAPI, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filePath: audioFile,
                })
            })

            const dataJson = await responseRecognizeAPI.json();
            
            Promise.all([downloadWav, responseRecognizeAPI, dataJson]).then(([downloadWavData, responseRecognizeAPIData, data]) => {
                let textCapitalized = data.text.charAt(0).toUpperCase() + data.text.slice(1)
                console.log(textCapitalized)
                props.changeRoomStateByVoice(textCapitalized)

                if (textCapitalized === "Bật tivi") {
                    textCapitalized = "Bật TV"
                }
                else if (textCapitalized === "Tắt tivi") {
                    textCapitalized = "Tắt TV"
                }
                setTextRecognized(textCapitalized)
            })
        },
        onRecordCallback: (e) => {
            console.log("recording", e)
        },
        errorCallback: (err) => {
            console.log("error", err)
        }
    }

    return (
        <>
            <div className="fakeMenu">
                <div className="fakeButtons fakeClose"></div>
                <div className="fakeButtons fakeMinimize"></div>
                <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
                <p className="line1">$ Nhận dạng tiếng nói<span className="cursor1">_</span></p>
                <p className="line2">Hãy thu âm lời nói của bạn để điều khiển căn phòng.<span className="cursor2">_</span></p>
                <p className="line3">[?] "Bật đèn", "Tắt đèn", "Bật TV", "Tắt TV", "Nghe nhạc", "Thời tiết", "Tắt loa"<span className="cursor3">_</span></p>
                <p className="line4">> {textRecognized === "" ? "" : textRecognized}<span className="cursor4">_</span></p>
            </div>

            <div style={{ paddingBottom: 10 }}></div>

            <AudioAnalyser {...audioProps}>
                <div className="btn-box">
                    {status !== "recording" &&
                        <i className="iconfont icon-start" title="Ghi âm"
                            onClick={() => setStatus("recording")}></i>}
                    {status === "recording" &&
                        <i className="iconfont icon-pause" title="Tạm dừng"
                            onClick={() => setStatus("paused")}></i>}
                    <i className="iconfont icon-stop" title="Dừng lại"
                        onClick={() => setStatus("inactive")}></i>
                </div>
            </AudioAnalyser>
        </>
    )
}

export default Record