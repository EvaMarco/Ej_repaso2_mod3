import React from 'react';
import {fetchPokemones} from './services/fetchPokemones';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones:[]
    }
  }
  componentDidMount(){
    this.getPokemones();
  }
  getPokemones(){
    fetchPokemones()
      .then(data => {
        // si queremos meterle un id a cada uno haremos un map
        // const newData = data.map((item, index)=>{return{...item, newId: index}});
        // this.setState({pokemones:newData})
        this.setState({pokemones:data})
        console.log(data)})
  }
  render() {
    const {pokemones} = this.state;
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de pokemones</h1>
          <PokeList pokemones = {pokemones}/>

      </div>
    );
  }
}

export default App;
