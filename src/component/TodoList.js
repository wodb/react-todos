import React,{Component} from 'react'
import ItemLi from './ItemLi.js'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var _this = this
        var result = this.props.data.map(function (items) {
            return (
                <ItemLi items={items} key={items.id} handleDelet={_this.props.handleDelet}/>
            )
        })
        return (
            <ul className='list-group'>
                {result}
                <li className="list-group-item">1已完成 / {this.props.data.length}总数</li>
            </ul>
        )
    }
}