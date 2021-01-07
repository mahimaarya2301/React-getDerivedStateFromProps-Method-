//Import Area
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class A extends Component{
    //1.Property

    state = {
        name:"A"
    };

    //2.Constructor

    constructor(props){
        //Call the parent constructor
        super(props);
        console.log('OK');
        this.state.name='Mahima';
    }

    //3.Method
    //Every Class Component must have render method which always return HTML (JSX)
    render(){
        return <h1>Hello { this.state.name }</h1>
    }

    static getDerivedStateFromProps(props,state){
        return { name:props.name };
    }

}

ReactDOM.render(<A name="Priyanka"/>,document.getElementById('root'))