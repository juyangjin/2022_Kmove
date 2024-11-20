import logo from './logo.svg';
import './App.css';

//const element = <h2>{printHello('JSX')}</h2>
function PrintHello(props) {
  const h2s = [];
  for (let topic of props.topics) {
    h2s.push(<li data-key={topic.id}>
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
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <PrintHello topics={topics} clickFcn={(id)=>{
              alert(id);
            }}></PrintHello>                    
      </header>
    </div>
  );
}

export default App;
