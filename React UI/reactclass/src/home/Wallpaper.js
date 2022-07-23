import React from 'react';

// Class Component
class Wallpaper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="app">
      <h1>{'Wallpaper component'}</h1>
    </div>);
  }
}

export default Wallpaper;
