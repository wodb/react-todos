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

    handleSubmit(task) {
        var data = this.state.data;
        console.log(data)
        data = data.concat([{"id": Date.now(), "task": task}]);
        console.log(data)
        this.setState({data});
    }

    handleDelet(id) {
        var arr = this.state.data;
        var index = function (id) {
            for (var i = 0,j = arr.length; i < j; i++) {
                if (arr[i].id === id) {
                    return i
                }
            }
        }
        arr.splice(index,1)
        this.setState({arr});
    }

    render() {
        return (
            <div className='col-md-6 col-md-offset-3 well'>
                <Home />
                <TodoList data={this.state.data} handleDelet={this.handleDelet.bind(this)}/>
                <TodoForm handleCilck={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('.container')
)