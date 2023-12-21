import { Link } from "react-router-dom"
import "./About.css"

export default function About() {
  return (
    <div className="about">
      <h2>Project Name: "ToDo List"</h2>
      <div>
        <h3>Description:</h3>
        This project combines modern React technologies with powerful libraries
        to create a convenient and productive tool for task management.
      </div>
      <h3>Used technologies and libraries:</h3>
      <div>
        <ul>
          <li>
            <h4>
              Dynamic Task Management with&nbsp;
              <Link to="https://react.dev/" target="_blank">
                React.js
              </Link>
              :
            </h4>
            Implementing a dynamic and intuitive interface for task management.
            Each task includes fields for title and completion status. Tasks can
            also be edited.
          </li>
          <li>
            <h4>
              <Link to="https://firebase.google.com/" target="_blank">
                Firebase
              </Link>
              :&nbsp; Firestore, Authentication:
            </h4>
            Leveraging Firebase Authentication, users can register, log in, and
            manage their task lists securely.
          </li>
          <li>
            <h4>
              Forms with&nbsp;
              <Link to="https://formik.org/" target="_blank">
                Formik
              </Link>
              &nbsp;and&nbsp;
              <Link to="https://www.npmjs.com/package/yup" target="_blank">
                Yup
              </Link>
              &nbsp;for Validation:
            </h4>
            Creating forms for adding and editing tasks using Formik. Validating
            form data with Yup, ensuring users input correct information.
          </li>
          <li>
            <h4>
              Navigation between Pages with&nbsp;
              <Link to="https://v5.reactrouter.com/" target="_blank">
                React Router
              </Link>
              :
            </h4>
            Employing React Router to establish a navigational structure with
            separate pages for the home page, todo list page, about page and
            login page.
          </li>
          <li>
            <h4>
              Icons and Styling with&nbsp;
              <Link to="https://fontawesome.com/" target="_blank">
                Fontawesome
              </Link>
              :
            </h4>
            Incorporating stylized icons for various actions such as adding,
            deleting, editing and marking tasks.
          </li>
          <li>
            <h4>Responsive Design with Media Queries:</h4>
            The website incorporates responsive design principles using media
            queries, ensuring a seamless and visually appealing experience
            across various screen sizes and devices
          </li>
        </ul>
      </div>
    </div>
  )
}
