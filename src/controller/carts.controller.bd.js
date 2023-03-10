const BdProductManager = require('../dao/mongoManager/BdProductManager');
const Products = new BdProductManager();
const BdCartManager = require('../dao/mongoManager/BdCartManager');
const Carts = new BdCartManager();

const createCarts = async (req, res) => {
  const cart = req.body;
  const Createcart = await Carts.CreateCarts(cart);
  if (!Createcart.error) {
    res.json(Createcart);
  } else {
    res.json(Createcart);
  }
};

const bdgetCartId = async (req, res) => {
  const id = req.params.cid;
  const cart = await Carts.getCartsId(id);
  if (!cart.error) {
    res.json(cart);
  } else {
    res.json(cart);
  }
};

const bdgetCart = async (req, res) => {
  const cart = await Carts.getCarts();
  if (!cart.error) {
    res.json(cart);
  } else {
    res.json(cart);
  }
};

const addProductToCart = async (req, res) => {
  const { cid, pid } = req.params;
  const product = await Products.getProductId(pid);

  if (!product) {
    return res.status(400).json({
      msg: `El producto con el id ${pid} no existe`,
      ok: false,
    });
  }

  const cart = Carts.getCartByUsername(cid);

  if (!cart) {
    const newChango = {
      priceTotal: product.price,
      quantityTotal: 1,
      products: [product],
      username: cid,
    };

    const cartToSave = await Carts.addProductToCarts(newChango);

    return res.status(200).json({
      msg: 'Carrito creado con exito',
      cart: cartToSave,
    });
  }
  const findProduct = cart.products.find((product) => product.id === pid);

  if (!findProduct) {
    cart.products.push(product);
    cart.quantity = cart.quantity + 1;
    cart.priceTotal = cart.products.reduce((Acomulador, ProductoActual) => Acomulador + ProductoActual.quantity, 0);

    const cartToUpdate = await Cart.updateProductToCart(cart);

    return res.status(201).json({
      msg: 'Producto agregado al carrito',
      cart: cartToUpdate,
    });
  }
};

// const addProductToCart = async (req, res) => {
//   const { cid, pid } = req.params;
//   const product = await Products.getProductId(pid);
//   if (product) {
//     const respuesta = await Carts.addProductToCarts(cid,product);
//     return(product)
//   }else{
//     res.json(product)
//   }
// }

module.exports = {
  createCarts,
  bdgetCart,
  bdgetCartId,
  addProductToCart,
};
