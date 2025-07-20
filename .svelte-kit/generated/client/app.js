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
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/blog": [3],
		"/blog/[slug]": [~4],
		"/company": [5],
		"/services/AI-driven": [6],
		"/services/AI-driven/blog/[slug]": [~7],
		"/services/microsoft-365": [8],
		"/services/microsoft-365/blog/[slug]": [~9],
		"/services/product-engineering": [10],
		"/services/product-engineering/blog/[slug]": [~11],
		"/services/sales-force": [12],
		"/services/sales-force/blog/[slug]": [~13],
		"/services/shopify": [14],
		"/services/shopify/blog/[slug]": [~15]
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