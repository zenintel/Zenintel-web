export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/blog": [3],
		"/company": [4],
		"/services/AI-driven": [5],
		"/services/AI-driven/blog/[slug]": [~6],
		"/services/microsoft-365": [7],
		"/services/product-engineering": [8],
		"/services/product-engineering/blog/[slug]": [~9],
		"/services/sales-force": [10],
		"/services/sales-force/blog/[slug]": [~11],
		"/services/shopify": [12],
		"/services/shopify/blog/[slug]": [~13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';