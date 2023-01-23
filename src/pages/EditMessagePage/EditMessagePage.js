import './editMessagePage.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMessage, editMessage } from "../../services/messages-api.js";

export default function EditMessagePage() {
    const nav = useNavigate();
    const { id } = useParams();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMessage(id)
            .then(response => {
                console.log(response);
                setMessage(response);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [id]);

    const editTheMessage = (event) => {
        event.preventDefault();
        const updatedMessage = {
            userName: event.target.userName.value,
            imageUrl: event.target.imageUrl.value,
            message: event.target.message.value,
            createdDate: event.target.createdDate.value
        }
        editMessage(id, updatedMessage)
            .then(response => {
                console.log(response);
                nav(`/view-message/${id}`);
            })
            .catch(error => console.log(error));
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="editMessagePage page">
            <div className="editMessageFormContainer">
                <h1>Edit Your Message</h1>
                <div className="editMessageForm">
                    <form onSubmit={editTheMessage}>
                        <p> Update the fields you want to change and click "Edit"</p>
                        <div className="editMessageFormInput">
                            <div className="editMessageFormFields">
                                <p> User Name: <input type="text" name="userName" defaultValue={message.userName}></input></p>
                                <p> Image URL: <input type="text" name="imageUrl" defaultValue={message.imageUrl}></input></p>
                                <p> Message: <input type="text" name="message" defaultValue={message.message}></input></p>
                                <p> Created Date: <input type="text" name="createdDate" defaultValue={message.createdDate}></input></p>
                            </div>
                        </div>
                        <div className="editMessageFormButtons">
                            <button>
                                <a href={`/view-message/${id}`}>Cancel</a>
                            </button>
                            <button>
                                <input type="submit" value="Edit"></input>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



