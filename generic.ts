function show<T>(arg:T):T{
    return arg
}

var output=show<string>("value")
var output2=show<number>(25)

console.log(output);
console.log(output2);

 