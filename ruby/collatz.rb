def collatz(value,steps)
  benchmark
  if @cache[value] && @caching
    return @cache[value] + steps - 1
 elsif value == 1
    return steps
 elsif value % 2 == 0
    return collatz(value/2,steps+1)
  else
    return collatz(3*value+1,steps+1)
  end
end

def calculate_collatz_steps(range, caching)
  @callstack = 0
  @caching = caching
  @cache = Hash.new
  range.each do |value|
    @cache[value] = collatz(value,1)
  end
  puts "Iterations: #{@callstack} integer: #{@cache.invert[@cache.values.max]} steps:  #{@cache[@cache.invert[@cache.values.max]]}"
end

def benchmark
  @callstack+=1
end

range = (1..10000)

calculate_collatz_steps(range, false)
calculate_collatz_steps(range, true)