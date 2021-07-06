import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './interfaces/UserProps';
import { User } from './models/User';

const users = new Collection(
	'http://localhost:3000/users',
	(json: UserProps) => {
		return User.buildUser(json);
	}
);

users.on('change', () => {
	const elRoot = document.getElementById('root');

	if (elRoot) {
		new UserList(elRoot, users).render();
	}
});

users.fetch();
