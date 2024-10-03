

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

myElement = <Counter/>;
   const myApp = myElement;
   ReactDOM.createRoot(document.getElementById('root')).render(myApp);