import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// Global service
import { RequestService } from '../request/request.service';
@Injectable({
	providedIn: 'root'
})
export class BaseService {

	collection: string = '';

	constructor(
		private requestService: RequestService
	) { }

	private toQueryString(params: any): string {
		let queryString = "";
		let first = true;
		const keys = Object.keys(params);
		for (const key of keys) {
			if (first) {
				queryString += "?";
				first = false;
			} else {
				queryString += "&";
			}
			queryString += `${key}=${params[key]}`;
		}
		return queryString;
	}

	create(model = {}, action = ""): Observable<any> {
		action = `${this.collection}${action}`;
		return this.requestService.execute(action, model, "POST");
	}

	getAll(filter = {}, action = ""): Observable<any> {
		action = `${this.collection}${action}`;
		if (Object.keys(filter).length > 0) {
			action = action + this.toQueryString(filter);
		}
		return this.requestService.execute(action, filter, "GET");
	}
	update(id: string, model = {}, action = "", method = "PUT"): Observable<any> {
		if (id != '') {
			action = `${this.collection}/${id}${action}`;
		} else {
			action = `${this.collection}${action}`;
		}
		return this.requestService.execute(action, model, method);
	}

	get(id: string, action = "", filter = {}): Observable<any> {
		action = `${this.collection}/${id}`;
		if (Object.keys(filter).length > 0) {
			action = action + this.toQueryString(filter);
		}
		return this.requestService.execute(action, {}, "GET");
	}

	remove(id: string, action = ""): Observable<any> {
		action = `${this.collection}/${id}`;
		return this.requestService.execute(action, {}, "DELETE");
	}
}
