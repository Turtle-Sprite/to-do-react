import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


class MyList extends Component {
  //setting state
  state = {
    taskArray: this.props.theList,
    newItem: ""
  }

  // -----functions
  //clearing list function
  clearList = () => {
    console.log("clearing list")
    this.setState({
      taskArray: []
    })
  }

  //handling change in input field
  handleInputChange = e => {
    console.log('input change', e)
    this.setState({
      newItem: e.target.value
    })
  }

  //handling form submission
  handleFormSubmit = e => {
    console.log('form submitted')
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem], newItem:''
      }
    })
  }

  render() {
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <div>
        <h1> Things I should stop procrastinating: </h1>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='todo'>To Do:</label>
          <input 
            type="text"
            id="todo"
            onChange={this.handleInputChange}
            value={this.state.newItem}
            />
          <button type='submit'>Add it!</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList