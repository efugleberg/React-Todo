import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItem: "",
        };
    }

    addItem = element => {
        element.preventDefault();
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

    // clearItem = element => {
    //     element.preventDefault();
    //     this.setState({
    //         inputItem:''
    //     })
    //     this.props.ListArray(element, this.state.inputItem);
    // }


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
                <button onClick={this.props.clearFromList} className=''>Clear Completed</button>
            </form>

            </div>
        )
    }

}

export default TodoForm;