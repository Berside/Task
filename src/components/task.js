import React from 'react';
import AddTask from './AddTask';
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    task = this.props.task
    render(){
        return(
            <div className='task'>
                <AiFillCloseCircle onClick={() => this.props.Delete(this.task.id)} className='delete-icon'/>
                <AiFillEdit onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="red-icon"/>
                <h3>name: {this.task.name} ------ deadline: {this.task.deadline} </h3>

                {this.state.editForm && <AddTask task={this.task} Add={this.props.Edit} />}
            </div>
        )
    }
}
export default Task