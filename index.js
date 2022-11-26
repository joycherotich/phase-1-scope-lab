// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
function setBestCustomer(){
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'tries to reassign';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'unsuccessfully tries to reassign';
}