import { UserProps } from '../interfaces/UserProps';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';

const rootURL = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(rootURL));
	}
}
