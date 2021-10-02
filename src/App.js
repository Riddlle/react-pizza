import React from 'react';
import { Route } from 'react-router-dom';

import {Header} from './components';
import {Home, Cart} from './pages';


function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('/db.json')
    .then((resp) => resp.json())
    .then(json => {
      setPizzas(json.pizzas);
    });
  }, []);

console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
    <div className="content">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  );
}

export default App;
