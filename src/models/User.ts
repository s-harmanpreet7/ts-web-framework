import { UserProps } from '../interfaces/UserProps';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

const rootURL = 'http://localhost:3000';
export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootURL)
		);
	}

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(rootURL, (json: UserProps) =>
			User.buildUser(json)
		);
	}

	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age });
	}
}
