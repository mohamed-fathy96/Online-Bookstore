const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'data', 'products.json');

module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static getAll(cb) {
        fs.readFile(p, (err, data) => {
            if (err)
                return cb([]);

            return cb(JSON.parse(data));
        });
    }
}