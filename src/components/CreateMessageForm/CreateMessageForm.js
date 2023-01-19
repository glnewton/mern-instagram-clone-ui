// Create a fprm that allows the user to create a new message
//
// Compare this snippet from  mern-instagram-clone-ui\src\pages\CreateMessagePage\createMessagePage.js

import { useState } from "react";
import { createMessage } from "../../services/messages-api";
import { useNavigate } from "react-router-dom";

export default function CreateMessageForm() {   
  const [formData, setFormData] = useState({
    userName:'',
    imageUrl: '_',
    message:'',
    createdDate: ''
  });
  const nav = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.userName]: e.target.value,
      [e.target.imageUrl]: e.target.value,
      [e.target.message]: e.target.value,
      [e.target.createdDate]: e.target.value
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
    <>
      <h1>Create Message</h1>
      <form onSubmit={handleSubmit}>
        <p>User Name: <input type="text" name="userName" value={formData.userName}></input></p>
        <p>Image Url: <input type="text" name="imageUrl" value={formData.imageUrl}></input></p>
        <p>Message: <input type="text" name="message" value={formData.message}></input></p>
        <p>Created Date: <input type="text" name="createdDate" value={formData.createdDate}></input></p>
        <button>
            <input type="submit" value="Submit"></input>
        </button>
      </form>
    </>
  )
}