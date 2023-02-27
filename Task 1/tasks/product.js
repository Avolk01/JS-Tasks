class Product {
    #name = "";  
    #price = 0;
    #quantity = 0;
    #description = "";

    constructor (options) {
        let {name = "defaultName", quantity = 0, price = 0, description = "default description"} = options; 
        this.#name = name;
        this.#quantity = quantity;
        this.#description = description;
        this.#price = price;
    }

    get name(){
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get quantity() {
        return this.#quantity;
    }

    get description() {
        return this.#description;
    }

    static getProductsFromQuery(products, query) { 
        if(typeof(query) != "string")
            throw new Exceptiopn("invalid input");
        let toDoList = this.#parseQuery(query);
        let res = []; 
        for (let prod of products) {
            let flag = true;
            for (let [func, name, value] of toDoList)
                flag = flag && func(prod[name], value);
            if (flag)
                res.push(prod);
        }    
        return res;    
    }

    static #parseQuery(query) {
        let name = "";
        let func = "";
        let value = "";
        let toDoList = [];
        for (let request of query.split("&")) {
            let arr = request.split("-");
            name = arr[0];
            if (name == "name" || name == "description") {
                func = arr[1];
                value = arr[2]               
            }
            else if (name == "price" || name == "quantity") {
                if (arr[1].indexOf("=") != -1) {
                    let temp = arr[1].split("=");
                    func = temp[0] + "=";
                    value = temp[1];
                } else {
                    func = arr[1][0];
                    value = arr[1].slice(1);
                }

            };
            toDoList.push([Product.#getFunc(func), name, value]);    
        }
        return toDoList;
    }

    static #getFunc(func) {
        switch (func) {
            case "contains": return function(str, value) { return str.includes(value); };
            case "starts": return function(str, value) { return str.startsWith(value); };
            case "ends": return function(str, value) { return str.endsWith(value); };
            case ">=": return function(prodValue, value) { return prodValue >= value; };
            case "=": return function(prodValue, value) { return prodValue = value; };
            case "<=": return function(prodValue, value) { return prodValue <= value; };
            case ">": return function(prodValue, value) { return prodValue > value; };
            case "<": return function(prodValue, value) { return prodValue < value; };
            default: return function(str, value) { return true; };
        }   
    }    
}
