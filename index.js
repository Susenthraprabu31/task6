
 //Get all the countries from the Asia continent /region using the Filter function


// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload=function(){
//     var result=JSON.parse(request.response);
//      result.filter((countries) => {
//            return countries.region ==="Asia";
//      })
//      console.log(result);
// }



//Get all the countries with a population of less than 2 lakhs using Filter function


// var request1 = new XMLHttpRequest();

// request1.open("GET","https://restcountries.com/v3.1/all");

// request1.send();

// request1.onload=function(){
//     var result1=JSON.parse(request1.response);
//     const pop = result1.filter((element)=>{
//         return element.population<200000;
//     })
// console.log(pop);}


//Print the following details name, capital, flag, using forEach method

// var requestt = new XMLHttpRequest();

// requestt.open("GET","https://restcountries.com/v3.1/all");

// requestt.send();

// requestt.onload=function(){
//     var resultt=JSON.parse(requestt.response);
//    resultt.forEach(element => {
//     console.log(element.name);
//         console.log(element.capital);
//         console.log(element.flag); 

//    });
// }

//Print the total population of countries using reduce method



// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v2/all");

// request.send();
// request.onload=function(){
//     var resul=JSON.parse(request.response);
//     var total = resul.reduce((acc,curr) =>{
//         return acc+curr.population;
//     } ,0);

//     console.log(total);
 
// }


//Print the country that uses US dollars as currency.

// var req = new XMLHttpRequest();

// req.open("GET","https://restcountries.com/v3.1/all");

// req.send();

// req.onload=function(){
//     var res=JSON.parse(req.response);
//    var currency = res.filter((element) => {
//      for(let key in element.currencies){
//         if(element.currencies[key].code === "USD"){
//             return element;
//         }
//      }
//    })
//         console.log(currency);
//     }
