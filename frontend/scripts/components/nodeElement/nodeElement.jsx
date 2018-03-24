import React from 'react';

class NodeElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  reveal(e) {
    this.setState({open: !this.state.open})
  }

  render() {
    // debugger
    const color = this.props.data.injured === 0 ? "#68fe36" : "red";

    return (
      <article>
      <svg height="50" width="50" style={{top: `${this.props.top}%`, left: `${this.props.left}%`}}>
          <circle onMouseEnter={(e) => this.reveal(e)} 
            onMouseLeave={(e) => this.reveal(e)} 
          cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill={color} />
        Sorry, your browser does not support inline SVG.
      </svg>
      <dialog open={this.state.open}>
        {
          Object.keys(this.props.data).map(key => {
            return (
              <span>key</span>
            )
          })

        }
      </dialog>
      </article>
    )
  }
}

export default NodeElement;
