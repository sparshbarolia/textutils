import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//                                                    WEBSITE USED IN TOAST NOTIFICATION
//https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar(props) {

  const notify = () => toast(`${props.mode === "light"? "dark":"light"} mode enabled`);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">{props.TitleText}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li> */}
                                                                   {/* USED BOOTSTRAP ICONS HERE */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>
                </Link>
              </li>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg> */}
              <li className="nav-item">
                <Link className="nav-link" to="/aboutPrLejao">{props.AboutText} </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === "light"? "dark":"light"}`} >
              {/* <input className="form-check-input" onClick={props.switchModeFunc} onClick={notify} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
              <input className="form-check-input" onClick={() => {props.switchModeFunc(); notify(); }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <ToastContainer />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  TitleText: PropTypes.string,
  AboutTeext: PropTypes.string
}

Navbar.defaultProps = {
  TitleText: "MyReactApp",
  AboutText: "about"
}