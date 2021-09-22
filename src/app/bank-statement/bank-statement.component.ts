import { Component, Input, OnInit } from "@angular/core";
import { TransactionService } from "../services/transaction.service";

@Component({
	selector: "app-bank-statement",
	templateUrl: "./bank-statement.component.html",
	styleUrls: ["./bank-statement.component.scss"],
})
export class BankStatementComponent implements OnInit {
	@Input()
	transactionsReceived!: any[];

	constructor(private transactionService: TransactionService) {}

	ngOnInit(): void {
		this.transactionsReceived = this.transactionService.transactionsData;
		console.log(this.transactionsReceived);
	}
}
