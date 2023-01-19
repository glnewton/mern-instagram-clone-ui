const baseURL = "http://localhost:3001/comments/" 
// | process.env.REACT_APP_BACKEND_API

//Works
const getAllComments = async () => {
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
const getComment = async (id) => {
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
const deleteComment = async (id) => {
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
const editComment = async (id, updatedComment) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'PUT',
            body: JSON.stringify(updatedComment),
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
const createComment = async (comment) => {
    try {
        const URL = `${baseURL}`
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(comment),
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

export { createComment, getAllComments, getComment, editComment, deleteComment }