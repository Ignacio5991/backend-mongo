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


    getCartByUsername = async (username) => {
        try {
            const cart = await cartsModel.findOne({username:'1'})
            return cart
        } catch (error) {
            return { msg: 'Error al mostrar carrito'}
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

    addProductToCarts = async (newChango) => {
      const creatChango = await cartsModel.create(newChango);
      return creatChango;
    }
    
    updateCartProducts = async (cart) => {
        const cartUpdated = await cartsModel.findOneAndUpdate({username: cart.username}, cart,{
            new: true
         });
        return cartUpdated
    } 
}

module.exports = BdCartsManager 
