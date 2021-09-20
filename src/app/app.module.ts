import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NewTransferComponent } from "./new-transfer/new-transfer.component";
import { BankStatementComponent } from "./bank-statement/bank-statement.component";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt, "pt");
@NgModule({
	declarations: [AppComponent, NewTransferComponent, BankStatementComponent],
	imports: [BrowserModule, FormsModule],
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
