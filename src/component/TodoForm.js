import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
    }

    submitTask(e) {
        // 取消默认行为
        e.preventDefault();
        e.stopPropagation();

        // 获得到用户输入的数据
        var value = this.refs.task.value;
        //console.log(value);
        this.props.handleCilck(value)
    }


    render() {
        return (
            <div>
                <hr />
                <form className="form-horizontal" onSubmit={this.submitTask.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="task" className="col-md-2 control-label">Task</label>
                        <div className="col-md-10">
                            <input type="text" id="task" ref="task" className="form-control"
                                   placeholder="你想做点什么"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <input type="submit" value="Save Task" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}