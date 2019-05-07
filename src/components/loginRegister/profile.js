import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.userToken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
      return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profile</h1>
                </div>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>First name</td>
                            <td>last name</td>
                            <td>email</td>
                        </tr>
                        <tr>
                            <td>{this.state.first_name}</td>
                            <td>{this.state.last_name}</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
    }
}

export default Profile;