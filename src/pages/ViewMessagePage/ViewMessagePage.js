import "./viewMessagePage.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMessage } from "../../services/messages-api.js";
import Message from "../../components/Message/Message.js";

export default function ViewMessagePage({ darkMode, setDarkMode }) {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getMessage(id)
            .then(response => {
                setMessage(response);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [id]);


    return (
        <div className={`viewMessagePage ${darkMode ? 'viewMessagePage-dark-mode border-dark' : ''}`}>
            <h1 className='mt-3'> View Your Message </h1>
            {loading ? <p>Loading...</p> : <Message element={message} darkMode={darkMode} setDarkMode={setDarkMode} />}
        </div>
    );
}

