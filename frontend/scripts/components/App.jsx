import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NodeElement from './nodeElement/nodeElement';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {height: window.innerHeight, width: window.innerWidth};

    window.addEventListener("resize", function() {
       this.setState({height: window.innerHeight});
    }.bind(this)
    )
  }

  getData() {
    // return await (await fetch(someURL)).json() 
    return {
      "102": { people: 10, injured: 0 },
      "103": { people: 20, injured: 10 },
      "courtyard": { people: 11, injured: 2 },
      "912": { people: 40, injured: 1 }
    }
  }

  render() {
    const roomMapping = {
      "102": [75,70],
      // "103":[150,100],
      // "courtyard":[400,400],
      // "912": [900,900]
    }

    const data = this.getData()

    return(
      <section>
        {
          Object.keys(roomMapping).map((room, idx)=> {
            return (
              <NodeElement key={roomMapping[room]}
              top={`${roomMapping[room][0]}`}
              left={`${roomMapping[room][1]}`}
              data={data[room]}/>
            )
          })
        }
        
        <img height={this.state.height}
        src="https://res.cloudinary.com/deahfhfxu/image/upload/v1521925270/blueprint.png"/>
      </section>
    )
    
  }
}

export default App;
