import React from 'react';

class NodeElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false, visibility: "hidden"}
  }

  reveal(e) {
    const setVisible = this.state.visibility === "hidden" ? "visible" : "hidden";
    this.setState({open: !this.state.open});
  }

  render() {
    const color = this.props.data.injured === 0 ? "#68fe36" : "red";



    return (
      <article>
        <svg height="50" width="50" style={{top: `${this.props.top}%`, left: `${this.props.left}%`}}>
            <circle onMouseEnter={(e) => this.reveal(e)} 
              onMouseLeave={(e) => this.reveal(e)} 
            cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill={color} />
        </svg>
        <dialog open={this.state.open} style={{ top: `${this.props.top}%`, left: `${this.props.left}%`}}>
        {
          Object.keys(this.props.data).map(key => {
            return (
              <p>{key.charAt(0).toUpperCase() + key.slice(1)}: {this.props.data[key]}</p>
            )
          })
        }
        </dialog> 
      </article>
    )
  }
}

export default NodeElement;
