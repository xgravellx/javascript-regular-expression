let text_bB      = "xhazalx";
let exp_bB       = new RegExp("\\Bhazal");
let result_bB    = text_bB.search(exp_bB);

console.log(result_bB + " " + "----> \\B");

let text_bB1      = "xhazalx";
let exp_bB1       = new RegExp("\\Bx");
let result_bB1    = text_bB1.search(exp_bB1);

console.log(result_bB1 + " " + "----> \\B");
