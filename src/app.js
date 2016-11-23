import React,{Component} from 'react'
import {render} from 'react-dom'

import Home from './component/Home.js'
import TodoForm from './component/TodoForm.js'
import TodoList from './component/TodoList.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {"id": "0001", "task": "吃饭"},
                {"id": "0002", "task": "睡觉"},
                {"id": "0003", "task": "打豆豆"},
            ]
        }
    }

    render() {
        //console.log(this.state.data)
        return (
            <div className='col-md-6 col-md-offset-3 well'>
                <Home />
                <TodoList data={this.state.data}/>
                <TodoForm data={this.state.data}/>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('.container')
)