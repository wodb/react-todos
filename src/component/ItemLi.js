import React,{Component} from 'react'

export default class ItemLi extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // 获得TodoList中的数据
        var items = this.props.items;
        return (
            <li className='list-group-item'>
                <input type="checkbox" className="pull-left" />
                {items.task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" ref="deleteBtn">删除</button>
                </div>
            </li>
        )
    }
}