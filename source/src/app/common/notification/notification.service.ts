import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Models
import { Notification } from './notification.model';
@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	private _noticeSource = new BehaviorSubject<Notification>({
		title: '',
		type: '',
		message: '',
	});

	currentNotice = this._noticeSource.asObservable();
	
	constructor() { }

	show(notice: Notification): void {
		this._noticeSource.next(notice);
	}
}
