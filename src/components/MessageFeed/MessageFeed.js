import { getAllMessages } from '../../services/messages-api.js';
import { useState, useEffect } from "react";
import Message from "../Message/Message";

export default function MessageFeed({ darkMode, setDarkMode }) {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getAllMessages()
        .then(response => {
            setMessages(response);
            setLoading(false);
        })
        .catch(error => console.log(error))
    }, []);
    console.log("MessageFeed darkMode: ", darkMode);
    return (
        <div className='messageFeed'>
            {loading ? <p>Loading...</p> :
                messages.map((element, index) => {
                return (<Message element={element} key={index} darkMode={darkMode} setDarkMode={setDarkMode}/>)
                }
                )
            }
        </div>
    );
    }
