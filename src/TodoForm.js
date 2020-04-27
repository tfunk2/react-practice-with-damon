import React, { Component } from 'react'

export default class TodoForm extends Component {

    state = {
        title: "",
        content: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input name='title' value={this.state.title} onChange={this.handleChange}/>
                <label>Content</label>
                <input name='content' value={this.state.content} onChange={this.handleChange}/>
                <p>{this.state.title.length > 5 ? null : "Title isn't long enough"}</p>
                <input type='submit' />
            </form>
        )
    }
}