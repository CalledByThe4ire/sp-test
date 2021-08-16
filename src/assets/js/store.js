import { tx } from 'tinyx';
import logger from 'tinyx/middleware/logger';

const store = logger(
	tx({
		activeIndex: 2,
		basket: [
			{
				id: 0,
				name: 'Amet minim mollit non deserunt ullamco est sit',
				price: 525,
				quantity: 1,
				imgName: 'blazer',
			},
			{
				id: 1,
				name: 'Amet minim mollit non',
				price: 525,
				quantity: 1,
				imgName: 'sneakers',
			},
		],
	})
);

export const inc = () => {
	return ({ update }) => update('activeIndex', idx => idx + 1);
};

export default store;
