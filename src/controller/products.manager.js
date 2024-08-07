import { ProductsServices } from "../services/dao.factory.js"


const ps = new ProductsServices()
// create a class ProductManager to manage all the products we need.
export class ProductManagers {
    // the constructor creates all the elements we need in our product manager     
    // async function to add products into de data base
    async addProduct(title, description, thumbnails, price, category, stock, code, status) {
        try {
            const resp = await ps.addProductService(title, description, thumbnails, price, category, stock, code, status)
            return resp
        } catch (err) {
            console.log(`Function addProduct: ${err}`)
        }
    }
    //function to get a certain amount of products or the entire array
    async getProducts(limitProducts, pageNumber, sortProducts, queryProperty, property, filter) {
        try {
            const resp = await ps.getProductsService(limitProducts, pageNumber, sortProducts, queryProperty, property, filter)
            return resp
        } catch (err) {
            console.log(`Function getProducts: ${err}`)
        }
    }
    //funtion to get a specific product by id
    async getProductbyId(pid) {
        try {
            const resp = await ps.getProductbyIdService(pid)
            return resp
        } catch (err) {
            console.log(`Function getProductbyId: ${err}`)
        }
    }
    //async function to erase a product in our database
    async deleteProduct(id) {

        try {
            const resp = await ps.deleteProductService(id)
            return resp
        } catch (err) {
            console.log(`Function deleteProduct: ${err}`)
        }

    }

    async updateProduct(id, title, description, price, thumbnails, code, stock, status, category) {

        try {
            const resp = await ps.updateProductService(id, title, description, price, thumbnails, code, stock, status, category)
            return resp
        } catch (err) {
            console.log(`Function updateProduct: ${err}`)
        }
    }

}
