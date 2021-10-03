import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class TransactionService {
	private transactionsList: any[];

	constructor() {
		this.transactionsList = [];
	}

	getTransactionsData() {
		return this.transactionsList;
	}

	addTransaction(transactionData: any) {
		this.includeDate(transactionData);

		this.transactionsList.push(transactionData);
	}

	private includeDate(transactionData: any) {
		transactionData.date = new Date();
	}
}
