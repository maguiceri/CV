import './App.css';
import Header from './modules/Header';
import Body from './modules/Body';


function App() {

  return (
    <div style={{ margin: 0, backgroundColor: "#081130",  minHeight: "100vh", overflowX:"hidden"}}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
