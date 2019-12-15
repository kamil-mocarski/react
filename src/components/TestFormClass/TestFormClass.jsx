import React from 'react';

class TestFormClass extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName
        };
        
    }

    componentDidMount () {
        console.log(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    
    }
    componentWillUnmount() {
        console.log('unmounting');
    }

    onSubmit = (event) => {
        const {onFormSubmit} = this.props;
        const {firstName, lastName} = this.state;
        console.log(this.input);
        

        event.preventDefault();
        onFormSubmit({firstName, lastName});
    }
    onFirstNameChange = ({target: {value}}) => {
        this.setState({firstName: value})
    }

    onLastNameChange = ({target: {value}}) => {
        this.setState({lastName: value})
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <input 
            ref={(el) => this.input = el}
            name="firstName"
            id="first-name1"
            onChange = {this.onFirstNameChange} 
            defaultValue={this.props.firstName}
            />
            <input 
            name="lastName" 
            id="last-name1" 
            onChange ={this.onLastNameChange} 
            defaultValue={this.props.lastName}
            />
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default TestFormClass;