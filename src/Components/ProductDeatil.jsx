import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/cartSlice";
import {
  helmetProducts,
  glovesProducts,
  goggleProducts,
  maskProducts,
  vestProducts,
} from "../assets/mockData";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const allProducts = [
    ...helmetProducts,
    ...glovesProducts,
    ...goggleProducts,
    ...maskProducts,
    ...vestProducts,
  ];

  const product = allProducts.find((p) => p.product_id === parseInt(id));

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart(product));
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-10 px-4 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row transition duration-500 hover:shadow-2xl">
        {/* Product Image */}
        <div className="md:w-1/2 h-72 md:h-auto">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.product_name}</h2>
            <p className="text-gray-600 mb-4">{product.product_Description}</p>
          </div>

          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="mt-4 py-3 px-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


