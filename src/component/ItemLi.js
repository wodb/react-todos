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
        console.log(id, 'ItemLi中')
        this.props.handleDelet(id)
    }

    handleClick(e) {
        var bool = e.target.checked;
        var id = e.target.parentNode.getAttribute('data-id')
        console.log(bool,id)
        this.props.handleCompleted(id,bool)
    }

    render() {
        // 获得TodoList中的数据
        var items = this.props.items;
        // 修改class名称
        var className = items.completed ? 'list-group-item list-group-item-success' : 'list-group-item';
        return (
            <li className={className} onMouseOver={this.handleover.bind(this)}
                onMouseOut={this.handleMouse.bind(this)} data-id={items.id}>
                <input type="checkbox" className="pull-left" onClick={this.handleClick.bind(this)} defaultChecked={items.completed} />
                <span>{items.task}</span>
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" ref="deleteBtn"
                            onClick={this.handleDelet.bind(this)}>删除
                    </button>
                </div>
            </li>
        )
    }
}