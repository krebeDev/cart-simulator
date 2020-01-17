import React, { Fragment, Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
      ]
     };
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
    });
    
    this.setState({ counters });
}

handleIncrement = (counter) => {
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   counters[index].value++;
   this.setState({ counters });
}

handleDelete = (counterId) => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters });
}
  render() { 
    return (
      <Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'> 
        <Counters 
          counters={this.state.counters}
          onDelete={this.handleDelete} 
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} />
        </main>
      </Fragment>
    );
  }
}

export default App;