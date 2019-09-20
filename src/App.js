import React from 'react';
import {fetchPokemones} from './services/fetchPokemones';
import PokeList from './components/PokeList';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones:[],
      query: ''
    };
    this.getUserQuery= this.getUserQuery.bind(this);
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
  getUserQuery(event){
    const query= event.currentTarget.value;
    this.setState({query: query})
  }
  render() {
    const {pokemones, query} = this.state;
    return (
      <div className="App">
        <h1 className="app__title">Mi lista de pokemones</h1>
          <Filters
            getUserQuery= {this.getUserQuery}
            query = {query}
          />
         
          <PokeList 
            pokemones = {pokemones}
            query = {query}
          />
      </div>
    );
  }
}

export default App;
