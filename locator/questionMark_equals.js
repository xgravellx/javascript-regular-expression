let text_equals      = "Hazal a Yılmaz";
let exp_equals       = new RegExp(" a ?= Yılmaz");
let result_equals    = exp_equals.test(text_equals);

console.log(result_equals + " " + "----> ?= ");
