import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'James', age: 17 });
const elRoot = document.querySelector('#root');

if (elRoot) {
	const userEdit = new UserEdit(elRoot, user);
	userEdit.render();
	console.log('user-edit');
} else {
	throw new Error('Root element not Found!');
}
