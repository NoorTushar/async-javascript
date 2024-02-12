/*
* callback function
* with a parameter of call_two
function one(call_two) {
   console.log(`I am one.`);

   call_two();
}

function two() {
   console.log(`I am two`);
}
one(two);

*/

/*
We will use two functions in this lesson:

1. order function
2. production function

*/

let stocks = {
   Fruits: ["strawberry", "grapes", "banana", "apple"],
   liquid: ["water", "ice"],
   holder: ["cone", "cup", "stick"],
   toppings: ["chocolate", "peanuts"],
};

// first place a order using a fruitIndex
// the order will be placed after two seconds. Use setTimeout()

const order = (fruitIndex, call_production) => {
   setTimeout(() => {
      console.log(
         `${stocks.Fruits[fruitIndex]} order placed, please call production`
      );

      call_production();
   }, 2000);
};

const production = () => {
   // production will start in 0 seconds.
   setTimeout(() => {
      console.log(`production has started`);

      // fruit will be chopped after 2 seconds
      setTimeout(() => {
         console.log(`the fruit will be chopped`);

         // add water and ice after 1 second
         setTimeout(() => {
            console.log(
               `${stocks.liquid[0]} and ${stocks.liquid[1]} were added`
            );

            // start the machine
            setTimeout(() => {
               console.log(`machine was started`);

               // select the container
               setTimeout(() => {
                  console.log(
                     `container: ${stocks.holder[0]} was selected as container`
                  );

                  // select the toppings
                  setTimeout(() => {
                     console.log(
                        `toppings: ${stocks.toppings[0]} was selected`
                     );

                     // serve the ice cream
                     setTimeout(() => {
                        console.log(`The ice cream was served`);
                     }, 2000);
                  }, 3000);
               }, 2000);
            }, 1000);
         }, 1000);
      }, 2000);
   }, 0);
};

order(0, production);
