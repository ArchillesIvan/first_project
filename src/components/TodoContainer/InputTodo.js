import React, {useState} from "react"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
      title: "",
    })
  
    const onChange = e => {
      setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    }
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
  }

export default InputTodo

// import React, {Component} from 'react'

// class InputTodo extends Component{
//     state = {
//         title: ""
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" placeholder="Add Todo ..." value={this.state.title} name="title" onChange={this.onChange}></input>
//                 <input type="submit" value="Submit"></input>
//             </form>
//         )
//     }

//     onChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     handleSubmit = e =>{
//         // console.log(this.state.id);
//         e.preventDefault();
//         this.props.addTodoProps(this.state.title);
//         this.setState({
//             title: ""
//         })
//     }
// }

// export default InputTodo