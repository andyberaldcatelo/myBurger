import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((res) => {
        const loadedOrders = [];
        for (const key in res.data) {
          loadedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: loadedOrders });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            price={+order.price}
            ingredients={order.ingredients}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
