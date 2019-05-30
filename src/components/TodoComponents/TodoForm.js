import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItem: "",
        };
    }

    addItem = element => {
        this.setState({
            inputItem: ""
        });
        this.props.addToList(element, this.state.inputItem);
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (
            <div className='input-form'>
                <form onSubmit={this.addItem}>
                <input
                type='text'
                placeholder ='....todo'
                onChange={this.handleChanges}
                value={this.state.inputItem}
                name="inputItem" 
                />
                <button onClick={this.addItem}>Add Todo</button>
                <button>Clear Completed</button>
            </form>

            </div>
        )
    }

}

export default TodoForm;