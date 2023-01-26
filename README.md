# MERN Instagram Clone UI

## Introduction

This is the front-end UI for the MERN stack Instagram Clone. It uses React as the front-end library. It is designed to be used in conjunction with a Node-Express back-end API. It interacts with the API to display messages and comments, and to allow users to create new messages and comments. It also utilizes Firebase for user authentication. It provides a front-end to perform CRUD operations against comments and messages in a visually pleasing way.It incorporates the React Router library to handle routing, and the React Bootstrap library to handle styling.  Dark mode is also supported.

[API Repository](https://github.com/glnewton/mern-instagram-clone-api)

[Live API](https://mern-instagram-clone-api.onrender.com)

[UI Repository](https://github.com/glnewton/mern-instagram-clone-ui)

[Live Site](https://mern-instagram-clone-ui.onrender.com)

## Screenshots

![Login Page](./docs/loginPage.jpg)

![Sign Up Page](./docs/signUpPage.jpg)

![Complete Profile Page](./docs/completeProfilePage.jpg)

![Update Profile Page](./docs/updateProfilePage-HalfDesktop.jpg)

![Update Profile Page 2](./docs/updateProfilePage-HalfDesktop-Dark.jpg)

![Home Page](./docs/homePage-HalfDesktop.jpg)

![Home Page 2](./docs/homePage-Tablet-Dark.jpg)

![View Message Page](./docs/viewMessagePage-HalfDesktop.jpg)

![View Message Page 2](./docs/viewMessagePage-HalfDesktop-Dark.jpg)

![Create Message Page](./docs/createMessagePage.jpg)

![Create Message Page 2](./docs/createMessagePage-Dark.jpg)

![Edit Message Page](./docs/editMessagePage-HalfDesktop.jpg)

![Edit Comments Display](./docs/editCommentsDisplay.jpg)

## Deployment & Build Status

This project is a hosted and deployed via Render. Render monitors this repository and will redploy on new commits.

## Design

Simple white, black and grey color scheme. Dark mode is supported. The UI is designed to be visually pleasing and easy to use. The UI is designed to be responsive. The UI is designed to be intuitive and easy to use.

## Technologies, Languages, Libraries & Platforms Used

Elements of both functional programming and object-oriented programming are used in this project. Functional React components are used where possible. The React Router library is used to handle routing. The React Bootstrap library is used to handle styling. The Moment.js library is used to format dates. The Firebase Auth library is used to handle user authentication. The Create React App library is used to create the React boilerplate.

### Core Technologies

- HTML (Markup Language)
- CSS (Styling Language)
- Bootstrap (Styling Library)
- Font Awesome (Icon Library)
- JavaScript (Programming Language)

### Libraries & Frameworks

- Node.js (Runtime Environment)
- JSX (JavaScript XML)
- React (Front-end Library)
- Create React App (React Boilerplate)
- React Router (Routing Library)
- React Bootstrap (Bootstrap Styling Library Rebuilt for React)
- Moment.js (Date Formatting Library)

### Third-Party Services

- Firebase Auth (Authentication as a Service (AaaS))
- Render (Cloud PaaS Platform)

## Features

1. User Authentication
2. Conditional Rendering of Components based on User Authentication
3. Create, Read, Update, Delete (CRUD) Operations for Messages and Comments
4. Dark Mode
5. Responsive Design

## Project Directory Structure

```js
mern-instagram-clone-ui
├── README.md
├── src
│   ├── .env
|   ├── index.js
│   ├── App.js
│   ├── App.css
│   ├── components
│   │   ├── Comment
|   |   ├   ├── Comment.js
|   |   ├   ├── Comment.css
│   │   ├── CommentFeed
|   |   ├   ├── CommentFeed.js
|   |   ├   ├── commentFeed.css
│   │   ├── Message
|   |   ├   ├── Message.js
|   |   ├   ├── message.css
│   │   ├── MessageFeed
|   |   ├   ├── MessageFeed.js
|   |   ├   ├── messageFeed.css
│   │   └── Navbar
|   |       ├── Navbar.js
|   |       └── Navbar.css
│   ├── pages
│   │   ├── HomePage
|   |   |   ├── HomePage.js
|   |   |   └── homePage.css
│   │   ├── LoginPage
|   |   |   ├── LoginPage.js
|   |   |   └── loginPage.css
│   │   ├── ViewMessagePage
|   |   |   ├── ViewMessagePage.js
|   |   |   └── viewMessagePage.css
│   │   |── ProfilePage
|   |   |   ├── ProfilePage.js
|   |   |   └── profilePage.css
│   │   |── CreateMessagePage
|   |   |   ├── CreateMessagePage.js
|   |   |   └── createMessagePage.css
│   │   |── EditMessagePage
|   |   |   ├── EditMessagePage.js
|   |   |   └── editMessagePage.css
│   │   |── SignUpPage
|   |   |   ├── SignUpPage.js
|   |   |   └── signUpPage.css
│   │   └── CompleteProfilePage
|   |       ├── CompleteProfilePage.js
|   |       └── completeProfilePage.css
│   ├── services
│   │   ├── Firebase.js
│   │   ├── comments-api.js
│   │   └── messages-api.js
│   ├── data
│   │   └── messageData.js
│   └── images
│       ├── testMessagePic.jpg
│       └── testProfilePic.jpg
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

```

### Files & Directories

- .env - contains environment variables for the app
- index.js - the entry point for the app, where the app is rendered to the DOM
- App.js - the root component for the app, where the app's routes are defined
- App.css - the stylesheet for the root component
- components/ - contains the React components for the app

- components/Comment/ - contains the React components for the Comment
- components/Comment/Comment.js - the component for a single comment
- components/Comment/comment.css - the stylesheet for the Comment component

- components/CommentFeed/ - contains the React components for the CommentFeed
- components/CommentFeed/CommentFeed.js - the component for a single comment
- components/CommentFeed/commentFeed.css - the stylesheet for the CommentFeed component

- components/Message/ - contains the React components for the Message
- components/Message/Message.js - the component for a single message
- components/Message/message.css - the stylesheet for the Message component

- components/MessageFeed/ - contains the React components for the MessageFeed
- components/MessageFeed/MessageFeed.js - the component for a single message
- components/MessageFeed/messageFeed.css - the stylesheet for the MessageFeed component

- components/Navbar/ - contains the React components for the Navbar
- components/Navbar/Navbar.js - the component for the Navbar
- components/Navbar/navbar.css - the stylesheet for the Navbar component

- pages/ - contains the React components for the app's pages
- pages/HomePage/ - contains the React components for the HomePage
- pages/HomePage/HomePage.js - the component for the HomePage
- pages/HomePage/homePage.css - the stylesheet for the HomePage component

- pages/LoginPage/ - contains the React components for the LoginPage
- pages/LoginPage/LoginPage.js - the component for the LoginPage
- pages/LoginPage/loginPage.css - the stylesheet for the LoginPage component

- pages/ViewMessagePage/ - contains the React components for the ViewMessagePage
- pages/ViewMessagePage/ViewMessagePage.js - the component for the ViewMessagePage
- pages/ViewMessagePage/viewMessagePage.css - the stylesheet for the ViewMessagePage component

- pages/ProfilePage/ - contains the React components for the ProfilePage
- pages/ProfilePage/ProfilePage.js - the component for the ProfilePage
- pages/ProfilePage/profilePage.css - the stylesheet for the ProfilePage component

- pages/CreateMessagePage/ - contains the React components for the CreateMessagePage
- pages/CreateMessagePage/CreateMessagePage.js - the component for the CreateMessagePage
- pages/CreateMessagePage/createMessagePage.css - the stylesheet for the CreateMessagePage component

- pages/EditMessagePage/ - contains the React components for the EditMessagePage
- pages/EditMessagePage/EditMessagePage.js - the component for the EditMessagePage
- pages/EditMessagePage/editMessagePage.css - the stylesheet for the EditMessagePage component

- pages/SignUpPage/ - contains the React components for the SignUpPage
- pages/SignUpPage/SignUpPage.js - the component for the SignUpPage
- pages/SignUpPage/signUpPage.css - the stylesheet for the SignUpPage component

- pages/CompleteProfilePage/ - contains the React components for the CompleteProfilePage
- pages/CompleteProfilePage/CompleteProfilePage.js - the component for the CompleteProfilePage
- pages/CompleteProfilePage/completeProfilePage.css - the stylesheet for the CompleteProfilePage component

- services/ - contains the services for the app
- services/Firebase.js - the Firebase service for the app
- services/comments-api.js - the comments API service for the app
- services/messages-api.js - the messages API service for the app

- data/ - contains the data for the app
- data/messageData.js - mock data for the app

- images/ - contains the images for the app
- images/testMessagePic.jpg - a test image for the app
- images/testProfilePic.jpg - a test image for the app

### Environment Variables

- `REACT_APP_BACKEND_API` - the URL for the backend API

### Backend API & API Documentation

The backend API is a RESTful API built with Express and MongoDB. The API is deployed to Render and can be found at [Live API](https://mern-instagram-clone-api.onrender.com) The API's source code can be found here [GitHub](https://github.com/glnewton/mern-instagram-clone-api).

The Firebase service is used to authenticate users and store user data. The Firebase service is configured in the Firebase.js file. It can be found here [Firebase](https://firebase.google.com/docs/auth).

### Firebase User Model

```js
user = {
    uid: String
    displayName: String
    email: String
    emailVerified: Boolean
    phoneNumber: String
    photoURL: String
    isAnonymous: Boolean
    tenantId: String
    providerData: Array
    apiKey: String
    appName: String
    authDomain: String
    stsTokenManager: Object
    redirectEventId: null
    lastLoginAt: String
    createdAt: String
}
```

## React Routes

| Route             | Component | Description |
| ----------------- | --------- | ----------- |
| /                 | HomePage  | Home Route - Returns the home page when a user navigates to <http://localhost:3000/> in browser this route shows a simple welcome page. |
| /login            | LoginPage | Login Route - Returns the login page when a user navigates to <http://localhost:3000/login> in browser this route shows a login form. |
| /view-message/:id | ViewMessagePage | View Message Route - Returns the view message page when a user navigates to <http://localhost:3000/view-message/:id> in browser this route shows a single message. |
| /profile          | ProfilePage | Profile Route - Returns the profile page when a user navigates to <http://localhost:3000/profile> in browser this route shows a user's profile. |
| /create-message   | CreateMessagePage | Create Message Route - Returns the create message page when a user navigates to <http://localhost:3000/create-message> in browser this route shows a form to create a new message. |
| /edit-message/:id | EditMessagePage | Edit Message Route - Returns the edit message page when a user navigates to <http://localhost:3000/edit-message/:id> in browser this route shows a form to edit a message. | 
| /sign-up          | SignUpPage | SignUp Route - Returns the sign up page when a user navigates to <http://localhost:3000/sign-up> in browser this route shows a form to sign up a new user. |
| /complete-profile | CompleteProfilePage | Complete Profile Route - Returns the complete profile page when a user navigates to <http://localhost:3000/complete-profile> in browser this route shows a form to complete a user's profile. |
| *                 | NotFound | NotFound Route - Returns a not found error message when a user navigates to an invalid route. |


## Installation Instructions

**Step 1: Clone the repository**

Run the following code in your terminal to download the code:

`git clone https://github.com/glnewton/mern-instagram-clone-ui.git`


**Step 2: Install Dependencies**

`cd mern-instagram-clone-ui`

`npm install`

**Step 3: Configure the application**

Create a `.env` file in the root directory of the project and add the REACT_APP_BACKEND_API variable to the .env file. The `REACT_APP_BACKEND_API` variable should be set to the URL of the backend API. For example: `REACT_APP_BACKEND_API=http://localhost:3001`. If you are using the backend API that is deployed to Render, the `REACT_APP_BACKEND_API` variable should be set to `https://mern-instagram-clone-api.onrender.com`.

**Step 4: Start the application**

`npm start`

The app will now be running at <http://localhost:3000> by default.

## API Functionality

1. API can performa basic CRUD operations for MESSAGES and COMMENTS.
2. All changes persist whether local or on the deployed site.

## Known Issues

- User image/avatar is not displayed on the message card. Currently the image of the message is used. Not all Firebase users have an image.
- Image URLS from servers that do not have open CORS will not render. Workaround is to use images from servers that have open CORS. Most images on the Amazon main site have open CORS - <https://www.amazon.com>.
- The app is not fully optimized for mobile devices or tablets.
- Form validation is not implemented.
- The app does not have a User Home Profile page.

## Roadmap

- Add View - Messages by User functionality.
- Add View - Comments by User functionality.
- Add form validation.
- Incorporate Bootstrap components into the navbar.
- Incorporate Bootstrap components into all pages.
- Optimize the app for mobile devices and tablets.
- Add additional conditional rendering to the app based on user authentication.
- Add private messages functionality.
- Add a User Profile page (not user profile edit page).
- Add unit tests to all components.
- Add integration tests to all components.
- Make fuller use of the Firebase authentication service and user model.

## Acknowledgements  

- This project was inspired by the Instagram app.
- To Cycle 28
- To the apprentices
- To G,T,K,M et al

## Resources

- Tishana TDL Express/React

## Disclaimer

I am not affliated with any of the above and all work used is for educational and demonstration purposes only. No profit is generated from this project.

## Author

- Gary Newton - [GitHub Profile](https://github.com/glnewton)  |  [LinkedIn Profile](https://www.linkedin.com/in/gary-newton-developer/)

## License

MIT License

MIT © [Gary Newton]()
