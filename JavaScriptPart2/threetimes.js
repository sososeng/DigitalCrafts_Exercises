function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(function(){console.log("hello, world!");});