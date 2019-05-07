import React, {Component} from 'react';
import {register} from './../funcionts';

export default class Register extends Component {

    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        const User = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        register(User).then((response) => {
            this.props.history.push(`/login`)
        }).catch((err) => {
            console.log(err, 'login');
        });
    }

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form onSubmit={this.onSubmit}>
                        <h2>Plase sign in</h2>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter name"
                                value={this.state.first_name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter last name"
                                value={this.state.last_name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="btn btn-info" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
      )
    }
}