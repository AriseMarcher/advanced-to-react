import TinyReact from "./TinyReact"

const root = document.getElementById("root")

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3 className="h3-class other-common">(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除的H3</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>这是新的</h1>
    <ul>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <h1>你好 Tiny React</h1>
    <ul>
      <li>3</li>
      <li>4</li>
    </ul>
    <h2 data-test="test123">(编码必杀技)</h2>
    {/* <div>
      嵌套1 <div>嵌套 1.1</div>
    </div> */}
    <h3>(观察: 这个将会被改变123)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段被修改的内容内容</span>
    <button onClick={() => alert("你好！！！")}>点击我</button>
    {/* <h6>这个将会被删除的H6</h6> */}
    2, 3
    <input type="text" />
  </div>
)

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 3000)

// 将virtual对象转换成真实Dom对象
// TinyReact.render(virtualDOM, root)

function Heart (props) {
  return (
    <div>
      一颗心
      {props.title}
      <p>hello</p>
      <span>&hearts;</span>
      <Demo />
    </div>
  )
}

function Demo () {
  return <div>这是Demo</div>
}

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "Default Title"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      title: "Changed Title"
    })
  }

  render () {
    return <div>
      <p>姓名：{this.props.name}</p>
      <p>年龄：{this.props.age}</p>
      <div>
        {this.state.title}
        <button onClick={this.handleClick}>改变Title</button>
      </div>
    </div>
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}

// TinyReact.render(<Heart title="hello React" />, root)
TinyReact.render(<Alert name="张三" age={20} />, root)

setTimeout(() => {
  TinyReact.render(<Alert name="李四" age={50} />, root)
  // TinyReact.render(<Heart title="hello React" />, root)
}, 2000)

