// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };



  async componentDidMount() {
    try {
      const res = await fetch('http://18.220.194.77:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
