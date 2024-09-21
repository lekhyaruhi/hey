function beforesubmit(){

    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);

 let formattedDate = new Date (inputdate.value).toLocaleDateString("en-IN");
 console.log("formattedDate");
 outputdate.value  = formattedDate;
 console.log("outputdate.value");
}