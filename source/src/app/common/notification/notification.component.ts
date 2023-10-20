import { Component } from '@angular/core';
// Global handler service
import { NotificationService } from './notification.service';
// Models
import { Notification } from './notification.model';
// Enums
import { NotificationMode } from './notification.enum';
@Component({
	selector: 'game-notification',
	templateUrl: './notification.component.pug',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

	notification: Notification = {
		title: '',
		message: '',
		type: ''
	};

	status: string = '';

	idTime: any;

	constructor(private notificationService: NotificationService) { }

	ngOnInit(): void {
		this.notificationService
			.currentNotice
			.subscribe((notice: Notification) => {
				if (notice.type !== '') {
					this.notification = notice;
					this.status = NotificationMode.OPEN;
					clearTimeout(this.idTime);
					this.idTime = setTimeout(() => { this.close(); }, 10000);
				}
			});
	}

	close(): void {
		if (this.status !== '') {
			this.status = NotificationMode.CLOSE
			clearTimeout(this.idTime);
			this.idTime = setTimeout(() => { this.status = '' }, 10000);
		}
	}

}
