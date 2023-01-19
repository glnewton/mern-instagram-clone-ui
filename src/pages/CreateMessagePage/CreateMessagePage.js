import { useState } from "react";
import { createMessage } from "../../services/messages-api";
import { useNavigate } from "react-router-dom";
import './createMessagePage.css';

export default function CreateMessagePage() {
    const [formData, setFormData] = useState({
        userName: '',
        imageUrl: '',
        message: '',
        createdDate: ''
    });
    const nav = useNavigate()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createMessage(formData);
            nav('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="createMessagePage page">
            <div className="createMessageFormContainer">
                <h1>Create Message</h1>
                <div className="createMessageForm">
                    <form onSubmit={handleSubmit}>
                        <p>Enter the following information to create a new message:</p>
                        <div className="createMessageFormInput">
                            <div className="createMessageFormFields">
                                <p>User Name <input type="text" name="userName" value={formData.userName} onChange={handleChange}></input></p>
                                <p>Image URL <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange}></input></p>
                                <p>Message <input type="text" name="message" value={formData.message} onChange={handleChange}></input></p>
                                <p>Created Date <input type="text" name="createdDate" value={formData.createdDate} onChange={handleChange}></input></p>
                            </div>
                        </div>
                        <div className="createMessageFormButtons">
                            <button>
                                <input type="submit" value="Submit"></input>
                            </button>
                            <button>
                                <input type="reset" value="Reset"></input>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

