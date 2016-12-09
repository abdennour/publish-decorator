import React from 'react';

class App extends React.Component {

  componentDidMount() {
    document.body.setAttribute('dir','rtl');
  }

  render() {
    return (<h1>هاجر</h1>);
  }
}

export default App;
