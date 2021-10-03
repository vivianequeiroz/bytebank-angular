import { Component } from "@angular/core";
import { TransactionService } from "./services/transaction.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "bytebank";

	constructor(private transactionService: TransactionService) {}

	toTransact($event: any) {
		this.transactionService.addTransaction($event);
	}
}
