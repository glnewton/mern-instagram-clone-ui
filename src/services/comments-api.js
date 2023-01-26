

let baseURL = ""

if (process.env.NODE_ENV === 'production') {
    baseURL = `${process.env.REACT_APP_BACKEND_API}` + "/comments/"
}
else {
    baseURL = 'http://localhost:3001' + "/comments/"
}

// Gets all comments
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
// Gets a single comment by commentId
const getComment = async (commentId) => {
    try {
        const URL = `${baseURL}${commentId}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Gets all comments by userId - used to get all comments by a specific user - UNTESTED/NOT USED
const getAllCommentsByUser = async (userId) => {
    try {
        const URL = `${baseURL}user/${userId}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}


// Gets all comments by messageId - used to get all comments for a single post - UNTESTED/NOT USED
const getAllCommentsByMessage = async (messageId) => {
    try {
        const URL = `${baseURL}message/${messageId}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Deletes a single comment
const deleteComment = async (id) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.status
    } catch (error) {
        console.error(error);
    }
}
// Updates a single comment
const editComment = async (id, updatedComment) => {
    console.log(updatedComment)
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'PUT',
            body: JSON.stringify(updatedComment),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.status
        
    } catch (error) {
        console.error(error);
    }
}
// Creates a single comment
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

export { createComment, getAllComments, getAllCommentsByMessage, getAllCommentsByUser, getComment, editComment, deleteComment }
