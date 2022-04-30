let text_b      = "xhazalx";
let exp_b       = new RegExp("\\bhazal");
let result_b    = text_b.search(exp_b);

console.log(result_b + " " + "----> \\b");

let text_b1      = "xhazalx";
let exp_b1       = new RegExp("\\bx");
let result_b1    = text_b1.search(exp_b1);

console.log(result_b1 + " " + "----> \\b");
