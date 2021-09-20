import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";
import { BankStatementComponent } from './bank-statement/bank-statement.component';

@NgModule({
	declarations: [AppComponent, NewTransferComponent, BankStatementComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
