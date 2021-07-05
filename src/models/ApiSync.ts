import axios, { AxiosPromise } from 'axios';
import { HasId } from '../interfaces/HasId';

export class ApiSync<T extends HasId> {
	constructor(public rootURL: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootURL}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootURL}/users/${id}`, data);
		} else {
			return axios.post(`${this.rootURL}/users`, data);
		}
	}
}
