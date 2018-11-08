'use strict';
export { }

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function getNameAndBalance(account) {
  let oneAccount: any[] = [];
  accounts.forEach(function (arr) {
    oneAccount = Object.values(arr)
    if (oneAccount[1] === account) {
      console.log(oneAccount[0] + ' ' + oneAccount[2])
    }
  })
}
getNameAndBalance(11234543);

let joinedAccounts: any[] = [];
for (let i = 0; i < accounts.length; i++) {
  let singleAccounts = (Object.values(accounts[i]));
  joinedAccounts = joinedAccounts.concat(singleAccounts);
}

function transferAmount(accountsArr, fromAccount, toAccount, cash) {
  if ((joinedAccounts.some(x => x === fromAccount)) && (joinedAccounts.some(x => x === toAccount))) {
    accountsArr.forEach(function (client) {
      if (client.accountNumber === fromAccount) {
        accountsArr.forEach(function (client2) {
          if (client2.accountNumber === toAccount) {
            client2.balance += cash;
            client.balance += cash;
          }
        })
      }
    })
    console.log(accountsArr);
  }
  else {
    console.log("404 - account not found");
  }
}

transferAmount(accounts, 43546731, 23456311, 500.0);
