import React from 'react';
import MainNav from './common/MainNav';

const App = props => (
  <div>
    <MainNav />
    <div>
      {props.children}
    </div>
  </div>
  );
// App.propTypes = {
//   children: PropTypes.object.isRequired
// }
export default App;

/*class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}*/
