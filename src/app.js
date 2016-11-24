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
                {"id": "0001", "task": "吃饭","completed":false},
                {"id": "0002", "task": "睡觉","completed":false},
                {"id": "0003", "task": "打豆豆","completed":false},
            ]
        }
    }

    handleSubmit(task) {
        var data = this.state.data;
        console.log(data)
        data = data.concat([{"id": Date.now(), "task": task,"completed":false}]);
        console.log(data)
        this.setState({data});
    }

    handleDelet(id) {
        var arr = this.state.data;
        var index = function (id) {
            for (var i = 0;i < arr.length; i++) {
                // 用相等就好，如果是全等新生成的ID是number所以有一个小bug
                if (arr[i].id == id) {
                    return i
                }
            }
        }
        arr.splice(index(id),1)
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