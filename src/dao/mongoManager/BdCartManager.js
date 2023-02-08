const cartsModel = require('../models/carts.model')
const productModel = require('../models/products.model')

class BdCartsManager {
    constructor() {
        this.carts = []
    }

    CreateCarts = async (cart) => {
        try {
            const Createcart = await cartsModel.create(cart);
            return Createcart

        } catch (error) {
            return { msg: "Error al crear Carritos" }

        }
    }

    getCartsId = async (id) => {
        try {
            const cart = await cartsModel.findById(id);
            return cart
        } catch (error) {
            return { msg: "Error Al Mostrar Carrito" }
        }
    }

    getCarts = async () => {
        try {
            const cart = await cartsModel.find();
            return cart
        } catch (error) {
            return { msg: "Error Al Mostrar Carrito" }
        }
    }

    addProductToCarts = async (cid, product) => {
        const cart = await cartsModel.findById(cid);
        console.log(JSON.stringify(product))
        const resultado = cart.products.findIndex((prod) => prod.id == product.id)
        console.log(resultado)
        if (resultado === -1){
        }else {

        }
    }
}

module.exports = BdCartsManager 
