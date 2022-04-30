let text_carat        = "Hazal Yilmaz";
let expression_carat  = new RegExp("^Yilmaz");
let result_carat      = expression_carat.test(text_carat);

console.log(result_carat + " " + "----> Carat ^ 1 ");


let text_carat1       = "Hazal Yilmaz";
let expression_carat1 = new RegExp("^Hazal");
let result_carat1     = expression_carat1.test(text_carat1);

console.log(result_carat1 + " " + "----> Carat ^ 2 ");