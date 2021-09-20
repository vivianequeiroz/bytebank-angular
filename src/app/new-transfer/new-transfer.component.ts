import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-new-transfer",
	templateUrl: "./new-transfer.component.html",
	styleUrls: ["./new-transfer.component.scss"],
})
export class NewTransferComponent implements OnInit {
	@Output() atTansfer = new EventEmitter<any>();

	value: any;
	account: any;

	constructor() {}

	ngOnInit(): void {}

	transfer(): void {
		const transfersData = { value: this.value, account: this.account };

		this.atTansfer.emit(transfersData);
		this.cleanFields();
	}

	cleanFields(): void {
		this.value = 0;
		this.account = 0;
	}
}
