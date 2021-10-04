import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NewTransactionComponent } from "./new-transaction/new-transaction.component";
import { BankStatementComponent } from "./bank-statement/bank-statement.component";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt, "pt");
@NgModule({
	declarations: [AppComponent, NewTransactionComponent, BankStatementComponent],
	imports: [BrowserModule, FormsModule, HttpClientModule],
	providers: [
		{ provide: LOCALE_ID, useValue: "pt" },
		{
			provide: DEFAULT_CURRENCY_CODE,
			useValue: "BRL",
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
