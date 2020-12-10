import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../styles/logo.jpg'
import HowTo from '../styles/HowTo.jpg'

const WebNavbar = (props) => {

  // Functions

  function handleLogout() {
    localStorage.removeItem('token')
    props.history.push('/')
    window.location.reload()
  }

  // Variables

  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  // Content

  return <div className="WebNavbar">
    <nav className="WebNavbar">
      <ul>
        <img className="logo" src={logo} alt="logo" />
        <img className="image" src={HowTo} alt="howto" />
        <li>
          {!localStorage.getItem('token') && <Link className="navLink" to="/signup">Sign Up</Link>}
        </li>
        <li>
          {!localStorage.getItem('token') && <Link className="navLink" to="/login">Log In</Link>}
        </li>
        <li>
          <Link className="navLink" to="/">Videos</Link>
        </li>
        <li>
          {localStorage.getItem('token') && <Link className="navLink" to="/add-video">Add a Video</Link>}
        </li>
        <li>
          {localStorage.getItem('token') && <Link className="navLink" to="/users">Users</Link>}
        </li>
        <li className="navLogout">
          {localStorage.getItem('token') && <button
            onClick={handleLogout}>
            Log Out
          </button>}
        </li>
      </ul>
    </nav>
    <div className="welcomeWrapper">
    <p className="welcomeBack">
      {localStorage.getItem('token') && <span>Welcome back <Link className="welcomeBackName" to={`/users/${userId}`}>{userName}</Link></span>}
    </p>
    </div>
  </div>
}

export default withRouter(WebNavbar)