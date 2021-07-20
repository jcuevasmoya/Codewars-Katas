function insurance(age, size, numofdays){
  if(age < 25){
    age = 10
  }else{
    age = 0
  }
console.log(age)
if(size == 'economy'){
  size = 0
}else if(size ==='medium'){
  size = 10
}else{
  size = 15
}


console.log(size)
if(numofdays < 0){
  numofdays = 0
}else{
  numofdays
}
    return (age*numofdays)+(size*numofdays)+(numofdays*50)
  }

 console.log(insurance(18, "medium", 7))