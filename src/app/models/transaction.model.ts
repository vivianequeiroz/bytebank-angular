export interface TransactionModel {
	transactionsReceived: Transaction[];
}

export interface Transaction {
	id: string;
	amount: number;
	destinyAccount: string;
	date: Date;
}
