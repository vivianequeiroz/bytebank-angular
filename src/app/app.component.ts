import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "bytebank";

	transfersReceived: any[] = [];

	transfer($event: any) {
		console.log("Data received: ", $event);
		const transfer = { ...$event, date: new Date() };
		this.transfersReceived.push(transfer);
	}
}
