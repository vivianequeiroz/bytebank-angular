import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";

@NgModule({
	declarations: [AppComponent, NewTransferComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
