/*function test(string) {
    if (string == "") return "GOOD";

    let str_array = string.toLowerCase().split("");

    console.log(str_array);

    let register = {};

    str_array.forEach((element) => {
        register[element] = (register[element] || 0) + 1;
    });

    console.log(register);

    let occurences = Object.values(register);

    console.log(occurences);

    let frequency = {};

    occurences.forEach((element) => {
        frequency[element] = (frequency[element] || 0) + 1;
    });

    console.log(frequency);

    let values = Object.values(frequency);

    console.log(values);

    //console.log(frequency[2]);
    console.log(values.length);

    if (values.length == 1) return "GOOD";

    if (values.length == 2) {
        let mode = (frequency_table) => {
            let keys = Object.keys(frequency_table);

            if (frequency_table[keys[0]] == frequency_table[keys[1]]) {
                return keys[0] < keys[1] ? keys[0] : keys[1];
            } else return frequency_table[keys[0]] > frequency_table[keys[1]] ? keys[0] : keys[1];
            
        };

        if(frequency[1] == 1 || frequency[parseInt(mode(frequency)) + 1] == 1) return "BAD";
    }

    return "UGLY";

    // let minmized = [...new Set(values)];
    // console.log(minmized);

    // if (minmized.length == 1) return "GOOD";
    // if (minmized.length == 2 && Math.max(...minmized) == Math.min(...minmized)) return "BAD";
    // return "UGLY";
}
*/
function test_string(input) {
    if (input == "") return "GOOD";
    
    let str_array = input.toLowerCase().split("");
    let register = {};

    str_array.forEach((element) => {
        register[element] = (register[element] || 0) + 1;
    });

    let occurences = Object.values(register);
    let frequency = {};

    occurences.forEach((element) => {
        frequency[element] = (frequency[element] || 0) + 1;
    });

    let values = Object.values(frequency);

    if (values.length == 1) return "GOOD";

    if (values.length == 2) {
        let mode = (frequency_table) => {
            let keys = Object.keys(frequency_table);
            
            if (frequency_table[keys[0]] == frequency_table[keys[1]]) {
                return keys[0] < keys[1] ? keys[0] : keys[1];
            } else return frequency_table[keys[0]] > frequency_table[keys[1]] ? keys[0] : keys[1];
            
        };

        if(frequency[1] == 1 || frequency[parseInt(mode(frequency)) + 1] == 1) return "BAD";
    }

    return "UGLY";
}

//console.log(test_string("ffaafbb"));