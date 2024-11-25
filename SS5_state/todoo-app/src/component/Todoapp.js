import React from 'react'

class Todoapp extends React.Component{
    constructor(props){
        super(props);
        this.state={
          todo: ['Mời bạn nhập công việc cần thực hiện trong ngày'],
          todos:''
        }
    }
    hanleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    hanleSumit=(event)=>{
       event.preventDefault()
       if(this.state.todos){
        this.setState({
            todo:[
                ...this.state.todo,
                this.state.todos
            ]
            
           });
           this.setState({todos:''})

       }

       
    }
    
    
    render(){
        return(
         <>
          <form onSubmit={this.hanleSumit} >
            <input type="text" value={this.state.todos}  name='todos' onChange={this.hanleChange} placeholder='Mời nguời dùng nhập công việc trong ngày' />
            <button>ADD</button>
          </form>
          <table border={1}>
            <thead>
             {this.state.todo.map((e,i)=>(
                <tr>
                    <td>{e}</td>
                </tr>
             ))}
            </thead>
          </table>
         </>
        );
    }
}
export default Todoapp;