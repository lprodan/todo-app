import "./About.css"

export default function About() {
    return <div className="about">
        <h2>Project Name: <span className="accent">"ToDo List"</span></h2>
        <div>
            <h3>Description:</h3>
            This project combines modern React technologies with powerful libraries to create a convenient and
            productive tool for task management.
        </div>
        <h3>Key Features:</h3>
        <div>
            <ul>
                <li>
                    <h4>Dynamic Task Management with React.js:</h4>
                    Implementing a dynamic and intuitive interface for task management.
                    Each task includes fields for title and completion status. Tasks can also be edited.
                </li>
                <li>
                    <h4>State Management with React Hooks and React Context:</h4>
                    Utilizing useState efficient component state management.
                    Applying React Context for global state management.
                </li>
                <li>
                    <h4>Server Interaction using Axios and JSON-Server:</h4>
                    Using Axios for making HTTP requests to the server.
                    Implementing a server-side with JSON-Server for storing and retrieving task data.
                </li>
                <li>
                    <h4>Forms with Formik and Yup for Validation:</h4>
                    Creating forms for adding and editing tasks using Formik.
                    Validating form data with Yup, ensuring users input correct information.
                </li>
                <li>
                    <h4>Navigation between Pages with React Router:</h4>
                    Employing React Router to establish a navigational structure with separate pages for the home page,
                    todo list page, about page.
                </li>
                <li>
                    <h4>Data Queries with React Query:</h4>
                    Utilizing React Query for efficient management of server queries
                </li>
                <li>
                    <h4>Icons and Styling with react-fontawesome:</h4>
                    Incorporating stylized icons for various actions such as adding, deleting, editing and marking
                    tasks.
                </li>
            </ul>
        </div>
    </div>
}