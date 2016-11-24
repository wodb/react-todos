import React,{Component} from 'react'

export default class ItemLi extends Component {
    constructor(props) {
        super(props)
    }

    // 鼠标移入显示删除按钮
    handleover() {
        this.refs.deleteBtn.style.display = 'inline'
    }

    // 鼠标移入隐藏删除按钮
    handleMouse() {
        this.refs.deleteBtn.style.display = 'none'
    }

    // 点击删除此条数据
    handleDelet(e) {
        var id = e.target.parentNode.parentNode.getAttribute('data-id')
        this.props.handleDelet(this,id)
    }

    render() {
        // 获得TodoList中的数据
        var items = this.props.items;
        return (
            <li className='list-group-item' onMouseOver={this.handleover.bind(this)}
                onMouseOut={this.handleMouse.bind(this)} data-id={items.id}>
                <input type="checkbox" className="pull-left"/>
                {items.task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" ref="deleteBtn" onClick={this.handleDelet.bind(this)}>删除</button>
                </div>
            </li>
        )
    }
}