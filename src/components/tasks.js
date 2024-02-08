import React from "react";
import Task from "./task";
class Tasks extends React.Component {
    render(){
        if(this.props.tasks.length > 0)
            return(
                <div>
                    {this.props.tasks.map((el) => (
                        <Task Edit={this.props.Edit} Delete = {this.props.Delete} key={el.id} task={el}/>
                    ))}
                </div>
            )
        else
            return(
                <div className="task">
                    <h3> Задач нет!</h3>
                </div>)
    }
}
export default Tasks