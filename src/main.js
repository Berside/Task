import React from 'react';
import Header from './components/Header';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    name: 'Homework',
                    deadline:'08.02.24'
                }
            ]
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }
    render() {
        return(
            <div>
                <Header title="Список задач" />
                <main>
                    <Tasks tasks={this.state.tasks} Edit={this.editTask} Delete={this.deleteTask} />
                </main>
                <aside> <AddTask Add={this.addTask}/> </aside>
            </div>
        )
    }
    addTask(task) {
        const id = this.state.tasks.length + 1
        this.setState({ tasks: [...this.state.tasks, {id, ...task}] })
    }
    editTask(task) {
        let allTasks = this.state.tasks
        allTasks[task.id-1] = task
        this.setState({tasks: []}, () =>{
            this.setState({tasks:[...allTasks]})
        })
    }
    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter((el) => el.id !== id)
        })
    }
}
export default Main