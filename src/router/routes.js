import Projects from '../pages/Projects';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Projects,
		key: 'Projects',
		path: '/Projects'
	}
];

export default routes;
