import React,{Component} from 'react'
import ItemLi from './ItemLi.js'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var _this = this;

        var statistics = {
            // 统计任务总数及完成的数量
            todoCount: this.props.data.length || 0,
            todoCompleteCount: this.props.data.filter(function(item) {
                return item.completed === true;
            }).length
        };

        var result = this.props.data.map(function (items) {
            return (
                <ItemLi items={items} key={items.id} handleDelet={_this.props.handleDelet} handleCompleted={_this.props.handleCompleted}/>
            )
        })
        // 渲染组件
        return (
            <ul className='list-group'>
                {result}
                <li className="list-group-item">{statistics.todoCompleteCount}已完成 / {statistics.todoCount}总数</li>
            </ul>
        )
    }
}