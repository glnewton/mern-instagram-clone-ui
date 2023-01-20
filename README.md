# MERN Instagram Clone UI

# WORK IN PROGRESS 

## About

This is the back-end API for a MERN stack Instagram clone. It uses Node-Express as the server, Mongoose as the ORM, and MongoDB as the database. The API is responsible for handling user-generated content, such as messages and comments. It is designed to be used in conjunction with a React front-end. It has two main models, Message and Comment, which are used to interact with the MongoDB.

[GitHub Repository](https://github.com/glnewton/mern-instagram-clone-api)

[Live API](https://mern-instagram-clone-api.onrender.com)

[GitHub Repository](https://github.com/glnewton/mern-instagram-clone-ui)

[Live Site](https://mern-instagram-clone-ui.onrender.com)

## Project Requirements (***UPDATE ME***)

[Requirements](./docs/Requirements.md)

## Demo Presentation (***UPDATE ME***)

[Recorded Demo File](./docs/demoPresentation.mp4)

[Link to Google Photos](https://photos.app.goo.gl/k7a9RPmQf98eFFC3A)

## Screenshots (***UPDATE ME***)

![Home Page](./docs/homePage.jpg)

![Inventory Page (Index Page)](./docs/inventoryPage.jpg)

![Item Detail Page (Show Page)](./docs/itemDetailPage.jpg)

![Update Item Page (Edit Page)](./docs/updateItemPage.jpg)

![Create Item Page (New Page)](./docs/createItemPage.jpg)

![Error Page (Error Page)](./docs/localErrorPage.jpg)

## Deployment & Build Status

Project is a hosted and deployed via Render and is connected to the GitHub Repository to redploy on new commits/pushes.

## Code Style

Elements of both functional programming and object-oriented programming are used in this project.


## Technologies, Languages, Libraries & Platforms Used

- NodeJS
- ExpressJS
- MongoDB (Cloud NoSQL Database)
- Mongoose
- Render (IaaS Platform)

## Features

1. The API has full CRUD functionality for the Message and Comment models.
2. It uses the Mongoose library to interact with MongoDB.
3. It includes routes for getting, creating, updating, and deleting messages and comments.
4. The API uses cors to allow the front-end to access the API.

## Project Directory (***UPDATE ME***)

`project/
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── docs/
├── database/
│ ├── dbConnection.js
│ ├── models/
│ └── item.js
├── public/
│ ├── images/
│ ├── stylesheets/
│ └── style.css
├── routes/
│ └── home.js
└── views/
├── pages/
├── partials/
│ ├── Card.jsx
│ ├── EditForm.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ └── NewForm.jsx
├── Default.jsx
├── Edit.jsx
├── Error.jsx
├── Home.jsx
├── Index.jsx
├── New.jsx
└── Show.jsx`

### Files & Directories (***UPDATE ME***)

- server.js - the main file for the express app, where the express app is created and the middleware and routes are set up
- package.json - lists the packages (including express) that the project depends on, as well as scripts for running the app and testing
- package-lock.json - records the exact versions of package dependencies that were installed
- README.md - a file containing information about the project, including instructions for how to set it up and use it. This file is often displayed on the project's homepage on GitHub.
- public/ - contains static assets such as images, JavaScript files, and CSS stylesheets
- routes/ - contains the route handlers for the app, which define the behavior for each URL endpoint
- views/ - contains the template files for the views rendered by the app, written in JSX
- views/partials/ - contains partial template files that can be included in other views
- database/ - contains the code for connecting to and interacting with the database.
- dbConnection.js - exports the code for connecting to and interacting with the database.
- database/models/ - This directory contain files for setting up the database schema and defining models for interacting with the data in MongoDB via Mongoose
- docs/ - contains documentation files for the project, iscreenshots, requirements and other files used by the developer such as an API reference or user guide.

## Endpoints (***UPDATE ME***)

Messages
    GET /messages: Get all messages
    POST /messages: Create a new message
    GET /messages/:id: Get a specific message by id
    PUT /messages/:id: Update a specific message by id
    DELETE /messages/:id: Delete a specific message by id

Comments
    GET /comments: Get all comments
    POST /comments: Create a new comment
    GET /comments/:id: Get a specific comment by id
    PUT /comments/:id: Update a specific comment by id
    DELETE /comments/:id: Delete a specific comment by id

| URL               | HTTP Verb | Action | Notes & Examples                                                                                                                                                                         |
| ----------------- | --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /                 | GET       | Home   | Home Route - Returns the home page when a user types <http://localhost:3000/> in browser this route shows a simple welcome page.                                                           |
| /items/           | GET       | Index  | INDEX Route - Returns the inventory page when a user types <http://localhost:3000/items> in the browser this route shows a list or index of all items                                      |
| /items/new        | GET       | New    | NEW Route - Returns the new item page when a user types <http://localhost:3000/items/new> in browser this route shows the user a form to create a NEW item                                 |
| /items/:id/delete | DELETE    | Delete | DELETE Route - initiates a DELETE request through a form submission with action = <http://localhost:3000/items/:id/delete> and allows the application the ability to delete a item         |
| /items/:id/update | PUT       | Update | UPDATE Route - initiates a PUT request through a form submission with action = <http://localhost:3000/items/:id/update> and allows the application the ability to Update data about a item |
| /items/create     | POST      | Create | CREATE Route - initiates a POST request through a form submission with action = <http://localhost:3000/items/create> and allows the application the ability to Create a item               |
| /items/:id/edit   | GET       | Edit   | EDIT Route - Returns the edit item page when a user types <http://localhost:3000/items/:id/edit> in browser shows the user a form to edit a item                                           |
| /items/:id        | GET       | Show   | SHOW Route - Returns the show item page when a user types <http://localhost:3000/items/:id> shows the user an individual item in the browser                                               |

## Models

Message
    userName: String
    userProfileImage: String
    imageUrl: String
    message: String
    likes: Number
    createdDate: String
    comments: Number
Comment
    messageId: String
    userName: String
    userProfileImage: String
    text: String
    createdDate: String

## Installation Instructions (***UPDATE ME***)

**Step 1: Clone the repository**

Run the following code in your terminal to download the code:

`git clone https://github.com/glnewton/mern-instagram-clone-api.git`

![Installation Screenshot 1](./docs/installationStep1.jpg)

**Step 2: Install Dependencies**

`cd mern-instagram-clone-api`

`npm install`

![Installation Screenshot 2](./docs/installationStep2.jpg)

**Step 3: Configure the application**

Create a .env file in the root directory and add a MONGODB_URI variable with the link to your MongoDB database. Add the PORT as well.

![Installation Screenshot 3](./docs/installationStep3-1.jpg)

![Installation Screenshot 3](./docs/installationStep3-2.jpg)

**Step 4: Start the application**

`npm start`

![Installation Screenshot 4](./docs/installationStep4.jpg)

The app will now be running at <http://localhost:3001> by default.

**Step 5: Seed the Database**

You can seed the database with some initial data by sending a GET request to http://localhost:3001/seed

## API Functionality

1. API can performa basic CRUD operations for MESSAGES and COMMENTS.
2. All changes persist whether local or on the deployed site.

## Known Issues

- Photos do not render.
- File tree does not display correctly in README.md

## Roadmap

- Address the above issues

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
