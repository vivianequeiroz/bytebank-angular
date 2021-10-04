import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";
@Injectable({
	providedIn: "root",
})
export class TransactionService {
	private transactionsList: any[];
	transactionsUrl = "http://localhost:3000/transactions";

	constructor(private httpClient: HttpClient) {
		this.transactionsList = [];
	}

	getAllTransactions(): Observable<Transaction[]> {
		return this.httpClient.get<Transaction[]>(this.transactionsUrl);
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
