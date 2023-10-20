import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Global handler Services
import { NotificationService } from '../common/notification/notification.service';
//import { SessionService } from '../utils/session/session.service';
// Models
import { Notification } from '../common/notification/notification.model';
// Config
import * as PARAMS from '../../../parameters.json';
@Injectable({
	providedIn: 'root'
})
export class RequestService {

	config: any = PARAMS;

	private httpHeaders = new HttpHeaders({
		'Content-Type': 'application/json'
	});

	public api = this.config['API'];

	constructor(
		private http: HttpClient,
		private notification: NotificationService,
		//private sessionService: SessionService
	) { }

	private handleError<T>(operation = 'Collection', result?: any): any {
		let body: Notification = {
			type: 'warning',
			title: 'Comunicación & entrenamiento comercial',
			message: 'Ha ocurrido un problema al ejecutar esta acción'
		};
		return (response: any): Observable<T> => {
			body.type = response['status'] >= 500 || response['status'] == 0 ? 'error' : 'warning';
			if (response.hasOwnProperty('error')) {
				if (response['error']['message'] != undefined) {
					if (typeof response['error']['message'] == 'string') {
						body.message = response['error']['message']
					} else if (typeof response['error']['message'] == 'object') {

						body.message = '';
						const keys = Object.keys(response['error']['message'])
						keys.forEach((key: string, index) => {
							body.message += ` ♠ ${response['error']['message'][key]} `;
						});
					}
				}
				//-body.message = response['error']['message'] != undefined ? response['error']['message'] : body.message;
				if (response['status'] === 401 && body.message == 'Unauthorized') {
					body = {
						type: 'info',
						title: 'Comunicación & entrenamiento comercial',
						message: 'Se ha terminado su sesión, por favor vuelva a iniciarla.'
					};
				}
				if (response.error.hasOwnProperty('error')) {
					result.code = response.error.error == 'PASSWORD_EXPIRED' ? response.error.error : '';
				}
				result.status = response['status'];
			}
			this.notification.show({
				title: body.title,
				message: body.message,
				type: body.type
			});
			return of(result as T);
		}
	}

	updateHeaders(header: string, value: string): void {
		this.httpHeaders = this.httpHeaders.set(header, value);
	}

	removeHeader(name: string): void {
		this.httpHeaders = this.httpHeaders.delete(name);
	}

	execute(
		collection: string,
		data: object,
		method = 'GET',
		headers = this.httpHeaders
	): Observable<any> {
		const service = this.api + collection;
		const options = { body: data, headers: headers };
		return this.http.request(method, service, options).pipe(
			catchError(this.handleError(collection, { success: false, method: method, service: service, collection: collection }))
		);
	}

}
