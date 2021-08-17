import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button, Form } from 'react-bootstrap';

import './App.css';
import First from './componenet/First';
import FormComp from './componenet/FormComp';
//import FormComp from './componenet/FormComp';
import Greeting from './componenet/Greeting';


function App() {
  return (
    <div className="App">
    
    <Greeting/>
    <First/>
    <FormComp/>
    </div>
  );
}

export default App;
