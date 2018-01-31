module.exports = function (faces) {
    var module = {};
    //Meta data object
    module.meta = {
        facesLen : faces.length
    };

    //Actual data object
    module.data = { 
        products: [],
        page: undefined,
        maxPage: 10
    };

    //Generates random number between 'min' and 'max' parameters
    module.generateRandomBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Generate products with random parameters
    module.generateProducts = function() {
        for (let i = 0; i < module.meta.facesLen; i++) {
            module.data.products.push({
             id: i,
             size: module.generateRandomBetween(15, 30),
             price: module.generateRandomBetween(10, 1000),
             face: faces[i],
             date: new Date(Date.now() - module.generateRandomBetween(1, 1500000000)).toString().substring(0, 15)
         });
        };
    };
    module.generateProducts();

    //Sort products by "sortBy" parameter
    module.sortProducts = function(sortBy) {
        if(sortBy == "size")
            module.data.products.sort(function(a,b) {return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);} );
        if(sortBy == "price")
            module.data.products.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} );
    };

    //Slice products for pagination
    module.sliceProducts = function(page) {
        var items = module.meta.facesLen/module.data.maxPage;
        var end = items*page;
        var start = end - items;
        const newData = Object.assign({}, module.data);
        newData.products = module.data.products.slice(start,end);
        return new_data;
    };

    return module;
};