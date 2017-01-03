import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return <h1 className="greeting">Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = React.createElement(
  'h1',
  {
    className: 'greeting',
    children: 'Hello, world!',
  },
);

const container = (
  <div className="container">
    <Welcome name="ビスケット・オリバ" />
    <Welcome name="愚地独歩" />
    <Welcome name="鎬昂昇" />
    {element}
    {getGreeting(user)}
  </div>
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: '本部以蔵'};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Tick</h1>
        <FormattedDate date={this.state.date} />
        <h2>Name: {this.state.name}</h2>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

function App() {
  return(
    <div>
      <Clock />
      <ActionLink />
      <Toggle />
    </div>
  );    
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );        
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('tick')
);


ReactDOM.render(
  container,
  document.getElementById('root')
);
