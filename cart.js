///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function (acc, curr) {
    return acc + curr.price;
}, 0
)

console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let finalPrice = ((cartTotal *= (1 + tax)) - couponValue);
    console.log(finalPrice);
}
calcFinalPrice(summedPrice, .50, .06);

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    First, the customer object will have the customers name and birthday. The birthday will allow the restaurant to give free items on that customers birthday.
    The customer object will have a rewards member boolean that states if a customer has registered for the restaurants rewards program and accumulator for points that the customer gets after each purchase (if they are a rewards member). Depending on how many points the customer has, there will be a possible reward they can redeem the points for (possiblya discount or free appetizer). If the customer is not a rewards member the points will stay at 0. There will also be a category for most frequent order so that the reastuarant attendent can make recommendations.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = { name: 'Arthur Baronov', birthday: 'January 25, 1987', isRewardMember: true, totalPoints: 150, favoriteDish: "Cheese Pizza" };