import React,{Component} from 'react'
import ItemLi from './ItemLi.js'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var _this = this;
        // 查询完成的数量
        var count = 0;
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i]
            if (item.completed) {
                count++;
            }
        }
        var result = this.props.data.map(function (items) {
            return (
                <ItemLi items={items} key={items.id} handleDelet={_this.props.handleDelet}/>
            )
        })
        return (
            <ul className='list-group'>
                {result}
                <li className="list-group-item">{count}已完成 / {this.props.data.length}总数</li>
            </ul>
        )
    }
}