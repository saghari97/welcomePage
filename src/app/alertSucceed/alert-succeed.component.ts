import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-alert-succeed',
    templateUrl: './alert-succeed.component.html',
    styleUrls: ['./alert-succeed.component.css']
})
export class AlertSucceedComponent  {
    @Input() name!: string;
    @Input() roles!: string;
    // to close the popup
    @Output() close = new EventEmitter<void>();
    onClose() {
        this.close.emit();
    }
}