import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {basketReducer} from '../store/reducers/basketReducer'

const store = createStore(basketReducer)
console.log(store)






function MyApp({ Component, pageProps }) {
  return <Provider store={store}> <Component {...pageProps} /> </Provider>
}

export default MyApp
