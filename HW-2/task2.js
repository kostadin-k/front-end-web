function process(input) {
    input = eval(input);
    var result = [];
    let counter = 0;
    let the_filter = (element) => {
        switch (typeof element) {
            case "number": {
                counter++;
                return false;
            } 
            case "string": {
                let reversed = element.split("").reverse().join("");
                return reversed;
            }
            case "function": {
                return element(42);
            }
            case "object": {
                if(Array.isArray(element)) {
    
                    let is_nested = (array) => {
                        for (i=0; i < array.length; i++) {
                            if(Array.isArray(array[i])) return true;
                        }
                        return false;
                    }
    
                    if(is_nested(element)) {
                        return element.flat(Infinity);
                    }
    
                    return element.sort();
                }
                if (Object.keys(element).length == 1) {
                    return `${Object.keys(element)[0]}: ${Object.values(element)[0]}`;
                }
                return false;
            }
            default: {
                return false;
            }
        }
    }
    input.forEach(element => {
        let new_elem = the_filter(element)
        if(new_elem) result.push(new_elem);
    });

    if(counter) result.unshift(counter);
    console.log(JSON.stringify(result));
    return result;
}

let arr = [[1,2],3,4];
let arr2 = [3,8,0,4];

//console.log(process('[1, "123456789", [1, 2, [3, 4]], function(a) { return a; }, { "name": "Martin" }, 3, 4, 5, function(a) { return (a + 1)}]'));
