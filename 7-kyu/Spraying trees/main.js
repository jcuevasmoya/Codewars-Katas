// There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

//     Weekday

//     Number of trees that must be sprayed on that day

//     Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

// Let cost of all liquid be x

// Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

function task(w, n, c) {
  let personOfDay = 
    w === 'Monday' ? 'James'
    : w === 'Tuesday' ? 'John'
    : w === 'Wednesday' ? 'Robert'
    : w === 'Thursday' ? 'Michael'
    : 'William'
  
  return `It is ${w} today, ${personOfDay}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`
}



console.log(task('Wednesday',10,2))
console.log(task('Monday',4,3))
console.log(task('Friday',5,4))
console.log(task('Tuesday',6,1))
console.log(task('Thursday',5,3))
