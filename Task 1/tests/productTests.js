describe("Product", function() {
    let arr = [];
    arr.push(new Product({name: "Молоко", description: "Белое, из-под коровы", price: 500, quantity: 3}));
    arr.push(new Product({name: "fd Test elem 1", description: "Не придумал", price: 500, quantity: 5}));   // test 3
    arr.push(new Product({name: "fd Test elem 2", description: "Не придумал", price: 500, quantity: 5}));   // test 3
    arr.push(new Product({name: "Яйца", description: "Гладкие, куриные", price: 300, quantity: 2}));        // test 4
    arr.push(new Product({name: "Клей", description: "Белый и липкий", price: 2, quantity: 37}));
    arr.push(new Product({name: "Корзина", description: "Как Зинина", price: Infinity, quantity: 1}));      // test 4
    arr.push(new Product({name: "Гоголь", description: "Сахарный мальчик", price: 1, quantity: 40000})); 
    arr.push(new Product({name: "Елка", description: "Зеленая и колючая", price: 800, quantity: 10}));      // test 2
    arr.push(new Product({name: "Елка", description: "Мягкая и желтая", price: 1000, quantity: 20}));
    it("Add to array", function() {
        assert.equal(arr.length, 9);
    }); 
    
    it("One elem", function() {
        let filter = "name-contains-а&price-<=1000&description-ends-ая&quantity-<=10"; // при поиске использовал русские буквы
        let filteredArr = Product.getProductsFromQuery(arr, filter);
        let elka = filteredArr[0];
        assert.equal(elka.name, "Елка");
        assert.equal(elka.description, "Зеленая и колючая");
        assert.equal(elka.price, 800);
        assert.equal(elka.quantity, 10);
    }); 

    it("Few elems", function() {
        let filter2 = "name-starts-fd&quantity-=5";
        filteredArr = Product.getProductsFromQuery(arr, filter2);
        assert.equal(filteredArr.length, 2);
    });

    it("Few elems again", function() {
        let filter2 = "quantity-<5&name-ends-а"; // при поиске использовал русские буквы
        filteredArr = Product.getProductsFromQuery(arr, filter2);
        assert.equal(filteredArr.length, 2);
    });
})
