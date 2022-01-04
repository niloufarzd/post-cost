var Userbasket=[
    { id: 1, name: "laptop", price: 17000000 },
    { id: 2, name: "phone", price: 15000000 },
    { id: 3, name: "milk", price: 2000 },
    { id: 4, name: "pen", price: 1000 },
    { id: 5, name: "pencil", price: 2000 },
    { id: 6, name: "cable", price: 30000 },
    
]
var Filterbasket=Userbasket.filter(function(product){
 return product.price < 100000;
})
 var PostCost=Filterbasket.length *1000;
 var sum =0;
 Userbasket.forEach(function(product){
     sum=sum+ product.price;
     
 })
 var Totalprice = sum + PostCost;
console.log("total price: ",Totalprice)
