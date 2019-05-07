import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

 class navbar extends Component {

    logOut = e => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        this.props.history.push(`/`)
    }


    render() {
        const LoginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <p onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </p>
                </li>
            </ul>
        )
      return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to="/" >Home <span className="sr-only">(current)</span></Link>
                {localStorage.userToken ? userLink:LoginRegLink}
            </div>
        </nav>
      )
    }

    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
}

export default withRouter(navbar);