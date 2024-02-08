import React from 'react';
class AddTask extends React.Component {
    bab = {}
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            deadline: ""
        }
    }
    render(){
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Задача:' onChange={(e) => this.setState({name: e.target.value})} />
                <input placeholder='Дата завершения:' onChange={(e) => this.setState({deadline: e.target.value})} />
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.bab = {
                        name: this.state.name,
                        deadline: this.state.deadline,
                    }
                    if(this.props.task)
                        this.bab.id = this.props.task.id
                    this.props.Add(this.bab)
                }}> Добавить задачу </button>
            </form>
        )
    }
}
export default AddTask