'use strict';

class Product{
    static menu = {
        p1:{
            name:'Jugo de Naranja',
            price:100, 
            quantity:0
        }, 
        p2:{
            name:'Sandwich de Queso',
            price:50, 
            quantity:0
        }, 
        p3:{
            name:'Hamburger de Pollo',
            price:75, 
            quantity:0
        }
    }
}


class DOM{
 // first, second and third Product; buttons
     static tableToop(){
        for(let i = 1; i < 4; i++){
            this[`c${i}`]=document.querySelector(`.c${i}`);
            this[`v${i}`]=document.querySelector(`.v${i}`);
            this[`p${i}`]=document.querySelector(`.p${i}`);
            this[`c${i}more`]=document.querySelector(`.c${i}more`);
            this[`c${i}less`]=document.querySelector(`.c${i}less`);
         }
    }
    // Dom
    static subTotal = document.querySelector('.subTotal');
    static tips = document.querySelector('.tips');
    static itbis = document.querySelector('.itbis');
    static granTotal = document.querySelector('.granTotal');
    static moreTips = document.querySelector('.moreTips');
    static lessTips = document.querySelector('.lessTips');
}
// Loop table data and button
DOM.tableToop();

// Calculate total and subTotals
class calculateProducts{
    static number = 0;
    // Subtotal
    static get sumarSubTotal(){
        return this.sumarSubTotal = [
                Product.menu.p1.quantity * Product.menu.p1.price,
                Product.menu.p2.quantity * Product.menu.p2.price,
                Product.menu.p3.quantity * Product.menu.p3.price
            ];
    }

    static set sumarSubTotal([v1,v2,v3]){
        let suma = v1+v2+v3;
        DOM.subTotal.innerHTML = `${suma.toFixed(2)}`;
    }
    // Tips
    static get moreTips(){
        this.number++;
        return this.number;
    }
    static set lessTips(value){
        this.number = value;
    }
    static get lessTips(){
        this.number--;
        if(this.number < 0){
            this.lessTips = 0;
            return this.number;
        }
        return this.number;
    }
    // ITBIS
    static get itbis(){
        let tax = (this.sumarSubTotal[0]+ this.sumarSubTotal[1]+ this.sumarSubTotal[2]) * 0.18;
        return tax.toFixed(2);
    }

    // Grab Total
    static get granTotal(){
        let taxes = parseFloat(this.itbis);
        let subTotal = this.sumarSubTotal[0]+this.sumarSubTotal[1]+this.sumarSubTotal[2];
        let tips = this.number;

        let res = taxes + subTotal + tips;
        return res.toFixed(2);
    }

}

DOM.moreTips.addEventListener('click', ()=>{
    calculateProducts.moreTips;
    DOM.tips.innerHTML = `${calculateProducts.number.toFixed(2)}`;
    DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;
});
DOM.lessTips.addEventListener('click', ()=>{
    calculateProducts.lessTips;
    DOM.tips.innerHTML = `${calculateProducts.number.toFixed(2)}`;
    DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

});


class getSetProductsP1{
    // Product Name
    static get p1Name(){ 
        return DOM.p1;
    }
    static set p1Name(value){
        this.p1Name.innerHTML = `${value}`
    }
    // Product Value
    static get p1Value(){
        return DOM.v1;
    }
    static set p1Value(value){
        this.p1Value.innerHTML= `${value}`;
    }
    // Product Quantity
    static get quantity(){
        Product.menu.p1.quantity++;
    }
    static set quantity(value){
        DOM.c1.innerHTML = `${value}`
    }
    static get lessQuantity(){
        Product.menu.p1.quantity--;
        if(Product.menu.p1.quantity < 0){
            this.lessQuantity = 0;
        }
    }
    static set lessQuantity(value){
        Product.menu.p1.quantity = value;
    }
}


getSetProductsP1.p1Name = Product.menu.p1.name;
getSetProductsP1.p1Value = Product.menu.p1.price;
getSetProductsP1.quantity = Product.menu.p1.quantity.toFixed(2)

DOM.c1more.addEventListener('click', ()=>{
        getSetProductsP1.quantity;
        getSetProductsP1.quantity = Product.menu.p1.quantity.toFixed(2);
        // console.log(Product.menu.p1.quantity);

        calculateProducts.sumarSubTotal;
        DOM.itbis.innerHTML = calculateProducts.itbis;
        DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;
});

DOM.c1less.addEventListener('click', ()=>{
    getSetProductsP1.lessQuantity;
    getSetProductsP1.quantity = Product.menu.p1.quantity.toFixed(2);
    // console.log(Product.menu.p1.quantity);

    calculateProducts.sumarSubTotal;
    DOM.itbis.innerHTML = calculateProducts.itbis;
    DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

});

class getSetProductsP2{
    // Product Name
    static get p2Name(){ 
        return DOM.p2;
    }
    static set p2Name(value){
        this.p2Name.innerHTML = `${value}`
    }
    // Product Value
    static get p2Value(){
        return DOM.v2;
    }
    static set p2Value(value){
        this.p2Value.innerHTML= `${value}`;
    }
    // Product Quantity
    static get quantity(){
        Product.menu.p2.quantity++;
    }
    static set quantity(value){
        DOM.c2.innerHTML = `${value}`
    }
    static get lessQuantity(){
        Product.menu.p2.quantity--;
        if(Product.menu.p2.quantity < 0){
            this.lessQuantity = 0;
        }
    }
    static set lessQuantity(value){
        Product.menu.p2.quantity = value;
    }
}

getSetProductsP2.p2Name = Product.menu.p2.name;
getSetProductsP2.p2Value = Product.menu.p2.price;
getSetProductsP2.quantity = Product.menu.p2.quantity.toFixed(2);

DOM.c2more.addEventListener('click', ()=>{
    getSetProductsP2.quantity;
    getSetProductsP2.quantity = Product.menu.p2.quantity.toFixed(2);
    // console.log(Product.menu.p2.quantity);

    calculateProducts.sumarSubTotal;
    DOM.itbis.innerHTML = calculateProducts.itbis;
    DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

});

DOM.c2less.addEventListener('click', ()=>{
getSetProductsP2.lessQuantity;
getSetProductsP2.quantity = Product.menu.p2.quantity.toFixed(2);
// console.log(Product.menu.p2.quantity);

    calculateProducts.sumarSubTotal;
    DOM.itbis.innerHTML = calculateProducts.itbis;
    DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

});


class getSetProductsP3{
    // Product Name
    static get p3Name(){ 
        return DOM.p3;
    }
    static set p3Name(value){
        this.p3Name.innerHTML = `${value}`
    }
    // Product Value
    static get p3Value(){
        return DOM.v3;
    }
    static set p3Value(value){
        this.p3Value.innerHTML= `${value}`;
    }
    // Product Quantity
    static get quantity(){
        Product.menu.p3.quantity++;
    }
    static set quantity(value){
        DOM.c3.innerHTML = `${value}`
    }
    static get lessQuantity(){
        Product.menu.p3.quantity--;
        if(Product.menu.p3.quantity < 0){
            this.lessQuantity = 0;
        }
    }
    static set lessQuantity(value){
        Product.menu.p3.quantity = value;
    }
}

    getSetProductsP3.p3Name = Product.menu.p3.name;
    getSetProductsP3.p3Value = Product.menu.p3.price;
    getSetProductsP3.quantity = Product.menu.p3.quantity.toFixed(2);

    DOM.c3more.addEventListener('click', ()=>{
        getSetProductsP3.quantity;
        getSetProductsP3.quantity = Product.menu.p3.quantity.toFixed(2);
        // console.log(Product.menu.p3);

        calculateProducts.sumarSubTotal;
        DOM.itbis.innerHTML = calculateProducts.itbis;
        DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

    });

    DOM.c3less.addEventListener('click', ()=>{
    getSetProductsP3.lessQuantity;
    getSetProductsP3.quantity = Product.menu.p3.quantity.toFixed(2);
    // console.log(Product.menu.p3.quantity);

        calculateProducts.sumarSubTotal;
        DOM.itbis.innerHTML = calculateProducts.itbis;
        DOM.granTotal.innerHTML = `RD$ ${calculateProducts.granTotal}`;

    });






