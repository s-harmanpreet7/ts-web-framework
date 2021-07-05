import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'James', age: 17 });
const elRoot = document.querySelector('#root');

if (elRoot) {
	const userForm = new UserForm(elRoot, user);
	userForm.render();
}
