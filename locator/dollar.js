let text_dollar        = "Hazal Yilmaz";
let expression_dollar  = new RegExp("Yilmaz$");
let result_dollar      = expression_dollar.test(text_dollar);

console.log(result_dollar + " " + "----> dollar $ 1 ");


let text_dollar1       = "Hazal Yilmaz";
let expression_dollar1 = new RegExp("^Hazal$");
let result_dollar1     = expression_dollar1.test(text_dollar1);

console.log(result_dollar1 + " " + "----> dollar $ 2 ");