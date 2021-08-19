import { combineReducers } from 'redux';

import paymentProcessReducer from './payment-process';
import orderReducer from './order';

const rootReducer = combineReducers({
	paymentProcess: paymentProcessReducer,
	order: orderReducer,
});

export default rootReducer;
