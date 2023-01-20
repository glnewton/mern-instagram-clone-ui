import "./homePage.css"

import MessageFeed from "../../components/MessageFeed/MessageFeed"

const HomePage = () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <MessageFeed />
        </div>
    )
}

export default HomePage