import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "bytebank";

	transferReceived: any;

	transfer($event: any) {
		console.log("Data received: ", $event);
		this.transferReceived = $event;
	}
}
