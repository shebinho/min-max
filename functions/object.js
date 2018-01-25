var list =`
Mark Johansson	waffle iron	80	2
Mark Johansson	blender	220	2
Mark Johansson	knife	180	2
Nikita Smith	blender iron	60	2
Nikita Smith	knife iron	55	2
Jane Doe	glasses	35	2
Jane Doe	soda	120	2
Jane Doe	carbon iron	20	2`;

// let lines = list.trim().split("\n");
function Product(name,price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let customers = list.trim().split("\n").map((line) => line.split("\t") )
         .reduce((customer,el) => {
         if(customer[el[0]] == null){

         }
         customer[el[0]].push(new Product (el [1], el[2], el [3]
         
 });    
return customer;
    },{});


console.log(customers);
