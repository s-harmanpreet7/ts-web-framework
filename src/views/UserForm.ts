import { UserProps } from '../interfaces/UserProps';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-user': this.onSaveClick,
		};
	}

	template(): string {
		return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set random age</button>
				<button class="save-user">Save</button>
            </div>
        `;
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');

		if (input && input.value) {
			const name = input.value;
			this.model.set({ name });
		}
	};

	onSaveClick = (): void => {
		this.model.save();
	};
}
