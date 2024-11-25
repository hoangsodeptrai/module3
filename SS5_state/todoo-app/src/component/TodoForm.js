import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <form>
                <input type="text" placeholder='Mời nhập công việc cần làm trong ngày' />
            </form>
        )
    }

}