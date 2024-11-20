import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function PrintHello(props) {
  const h2s = [];
  for (let topic of props.topics) {
    let _class = '';
    if (topic.id == props.current) {
      _class ='on';
    }
    h2s.push(<li className={_class} data-key={topic.id}>
      <a href={'/' + topic.title} onClick={(event)=>{
        event.preventDefault();
        props.clickFcn(topic.id);
    }}>{topic.title}
    </a></li>);
  }
  return <i>{h2s}</i>;
}
function App() {
  const topics = [
    {id:1, title:'React'},
    {id:2, title:'JSX'}
  ];
  const [current, setCurrent] = useState(2);
  let topic = null;
  for (let idx in topics) {
    if (topics[idx].id == current) {
      topic = topics[idx];
      break;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
            <PrintHello topics={topics} current={current} clickFcn={(id)=>{
              setCurrent(id);
            }}></PrintHello>
        </ul>
        <h1>Hello, {topic.title}</h1>
      </header>
    </div>
  );
}

export default App;
