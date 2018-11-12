const user = {
    firstName: "Bart",
    age: 10,
    growUp: function(){
       setInterval(() => {
       console.log('I am ' + this.age++);
     }, 1000)
    }
}
user.growUp();