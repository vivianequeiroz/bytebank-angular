import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-new-transaction",
	templateUrl: "./new-transaction.component.html",
	styleUrls: ["./new-transaction.component.scss"],
})
export class NewTransactionComponent implements OnInit {
	@Output() atTransaction = new EventEmitter<any>();

	value: any;
	account: any;

	constructor() {}

	ngOnInit(): void {}

	transaction(): void {
		const transactionsData = { value: this.value, account: this.account };
		this.atTransaction.emit(transactionsData);
		this.cleanFields();
	}

	cleanFields(): void {
		this.value = 0;
		this.account = 0;
	}
}
