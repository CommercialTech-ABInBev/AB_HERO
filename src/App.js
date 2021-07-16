
import './App.css';
import { Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import CreateImage from './Pages/CreateImage/CreateImage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Register}/>
      <Route exact path="/image" component={CreateImage}/>
    </div>
  );
}

export default App;
