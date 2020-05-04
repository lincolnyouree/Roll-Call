import React, {Component} from 'react';


class AddPerson extends Component {
    state = {
        name: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.name, this.props.role);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    };

    render() {
        return (
            <div>
                <form autocomplete="off" onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPerson;