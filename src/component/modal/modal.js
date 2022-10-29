import React, { useState } from "react";
import './modal_style.scss'

const Modal = () => {
    const [show, setShow] = useState("hidden")
// const x = 'hidden';
    const visibility = () => {
        setShow('visible')
}
const close = ()=>{
    setShow('hidden')
}
    return (
        <div className="App">
            <button className="open-modal-btn" onClick={() => visibility()}>✨ Открыть окно</button>
            <div className="overlay" style={{visibility: show}}>
                <div className="modal">
                    <svg height="200" viewBox="0 0 200 200" width="200" onClick={()=>close()}>
                        <title />
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                </div>
            </div>
        </div>
    )
}
export default Modal