import React, { useState } from "react";
import './modal_style.scss'

// const Modal = () => {
//     const [show, setShow] = useState(false)
//     const visibility = () => {
//         setShow('visible')
// }
// const close = ()=>{
//     setShow('hidden')
// }
// return (
//     <div className="App">
//         <button className="open-modal-btn" onClick={()=>setShow(!show)}>✨ Открыть окно</button>
//         {
//             show && (<div className="overlay">
//                 <div className="modal">
//                     <svg height="200" viewBox="0 0 200 200" width="200" onClick={()=>setShow(!show)}>
//                         <title />
//                         <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//                     </svg>
//                     <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
//                 </div>
//             </div>)
//         }

//     </div>
// )
// }
const View = ({ show, setShow, children }) => {
    console.log(children)
    return (
        <div className={`overlay animated ${show ? 'show' : ''}`}>
            <div className="modal">
                <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setShow(!show)}>
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                {children}
            </div>
        </div>
    )
}

const Modal = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <button className="open-modal-btn" onClick={() => setShow(!show)}>✨ Открыть окно</button>
            <View show={show} setShow={setShow}>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                <h3>Modal window</h3>
            </View>
        </div>
    )
}
export default Modal