const baseURL = "http://localhost:3001/messages/"

//const baseURL = process.env.REACT_APP_BACKEND_API + "/messages/"  || "http://localhost:3001/messages/"


//Works
const getAllMessages = async () => {
    try {
        const URL = `${baseURL}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return await response.json();
        } else {
            throw new Error("Response is not JSON");
        }
    }
    catch (error) {
        console.error(error)
    }
}
//Works
const getMessage = async (id) => {
    try {
        const URL = `${baseURL}${id}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const deleteMessage = async (id) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const editMessage = async (id, updatedMessage) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'PUT',
            body: JSON.stringify(updatedMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const createMessage = async (message) => {
    try {
        const URL = `${baseURL}`
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
    catch (error) {
        console.error(error)
    }
}

export { createMessage, getAllMessages, getMessage, editMessage, deleteMessage }





