import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "bytebank";

	transactionsReceived: any[] = [];

	transaction($event: any) {
		console.log("Data received: ", $event);
		const transaction = { ...$event, date: new Date() };
		this.transactionsReceived.push(transaction);
	}
}
