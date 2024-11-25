import React from 'react'
class StudentsForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            phone:'',
            email:''
        }
    }
    hanleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    hanleSumit = (s)=>{
        s.preventDefault();
        if(this.state){
            this.props.onCreateStudents(this.state)
        }
        
    }

    render(){
        return(
           <form onSubmit={this.hanleSumit} >
               <input type="text" placeholder='Nhập tên' name='name' onChange={this.hanleChange} />
               <input type="number"  placeholder='Nhập SĐT' name='phone'  onChange={this.hanleChange}/>
               <input type="email" placeholder='Nhập Email' name='email' onChange={this.hanleChange} />
               <button>ADD</button>
           </form>
        );
    }
}
export default StudentsForm;