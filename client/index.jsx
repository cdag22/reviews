import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3003/reviews', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        this.setState({
          reviews: data
        });
      })
      .catch(error => console.log('error with get request -->', error));
  }

  render() {
    return (
      <div className="pageContainer">
        <hr />
        <div className="pt-5">
          <h1 className="reviewTitle mb-4">Reviews</h1>
          <Reviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));