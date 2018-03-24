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
      "mainRoom": { people: 10, injured: 0 },
      "middleRom": { people: 20, injured: 10 },
      "office": { people: 11, injured: 2 },
      "outreach": { people: 40, injured: 1 }
    }
  }

  render() {
    const roomMapping = {
      "mainRoom": [75,70],
      "middleRom":[44,39],
      "office":[82,47],
      "outreach": [51,12]
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
