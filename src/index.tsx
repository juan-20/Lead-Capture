import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/formSlice';

class PingbackForm extends HTMLElement {
  connectedCallback() {
    const fields = JSON.parse(this.getAttribute('data-fields') || '[]');
    
    ReactDOM.render(
      <Provider store={store}>
        <App fields={fields} />
      </Provider>,
      this
    );
  }
}

customElements.define('pingback-form', PingbackForm);