import createStore from 'redux'
import Root from "./reducers/index";


const Store = createStore(Root);

export default Store;