import { Component, Input, OnInit } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { TransactionService } from "../services/transaction.service";

@Component({
	selector: "app-bank-statement",
	templateUrl: "./bank-statement.component.html",
	styleUrls: ["./bank-statement.component.scss"],
})
export class BankStatementComponent implements OnInit {
	transactionsReceived!: any[];

	constructor(private transactionService: TransactionService) {}

	ngOnInit(): void {
		this.transactionService
			.getAllTransactions()
			.subscribe((transactionsReceived: Transaction[]) => {
				console.table(transactionsReceived);
				this.transactionsReceived = transactionsReceived;
			});
	}
}
