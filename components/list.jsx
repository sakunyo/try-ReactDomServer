import React from 'react';

export class ListElements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo">
        <h1>{this.props.name}</h1>
        <ul>
          <li>foo</li>
          <li>bar</li>
        </ul>
      </div>
    );
  }
}
