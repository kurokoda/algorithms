var callstack;
var caching;
var cache;

function collatz(value, steps) {
  benchmark();
  if (cache[value] && caching){
    return cache[value] + steps - 1;
  } else if (value === 1){
    return steps;
  } else if (value % 2){
    return collatz(3 * value + 1, steps + 1);
  } else {
    return collatz(value / 2, steps + 1);
  }
}

function calculate_collatz_steps(integer, c) {
  callstack = 0;
  caching = c;
  cache = {};

  for (i = 1; i <= integer; i++){
    cache[i] = collatz(i, 1);
  }
  var result = Math.max.apply(null,
    Object.keys(cache).map(function(e) {
      return cache[e];
    }));
  console.log(
    "Iterations: " + callstack +
    " integer: " + cache[result] +
    " steps: " + result
  );
}

function benchmark() {
  callstack += 1;
}

integer = 10000;

calculate_collatz_steps(integer, false);
calculate_collatz_steps(integer, true);