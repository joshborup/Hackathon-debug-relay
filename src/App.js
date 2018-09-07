import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  contructor(){
    this.state = {
      user: '',
      name: '',
      password: '',
      message: ''
    }
  }

  changeHandler = (key, val) => {
    this.setState({
      key: val
    })
  }

  login = () => {
    const body = {
      name: this.state.name,
      password: this.state.password
    }
    axios.post('/api/login', body).then((response) => {
      this.setState({
        message: response.data
      })
    })
  }

  getMyInfo = () => {
    axios.get('/api/get_user').then((response) => {
      this.setState({
        user: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div>
            <div>
              <div>
                name: <input name='name' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.password}/>
              </div>

              <div>
                password: <input type='password' name='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.name}/>
              </div>

              <button onClick={this.state.login}>Submit</button>

              {this.state.message}
            </div>

            <div>
              <div> user id: {`${this.state.user.id}`}</div>
              <div> user name: {`${this.state.user.name || null}`}</div>
              <button onClick={this.getMyInfo}>Get My Info</button>
            </div>
        </div>
      </div>
    );  
  }
}

export default App;