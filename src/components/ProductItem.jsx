import millify from "millify";
import { IoMdEye } from "react-icons/io";

const ProductItem = ({ product }) => {
  const month = new Date(product.date).getMonth();
  const day = new Date(product.date).getDate();
  const year = new Date(product.date).getFullYear();
  const aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const fullDate = `${aylar[month]} ${day} ${year}`;

  return (
    <div className="productCard" style={{ width: "400px" }}>
      {/* image */}
      <div className="relative ">
        <img
          style={{ width: "400px", height: "200px" }}
          className="product-img rounded-t"
          src={product.imageURL}
          alt=""
        />
        <span className="absolute top-10 left-5 bg-yellow-400 px-2 text-sm font-bold rounded">
          {product.salesMethod === "flatRate"
            ? "Flat Rate"
            : product.salesMethod === "scheduled"
            ? "Scheduled"
            : "Auction"}
        </span>

        <span className="absolute top-2 right-2 flex items-center gap-2 text-white">
          <span className="text-3xl">
            <IoMdEye />
          </span>
          <span className="text-lg">{millify(product.like)}+</span>
        </span>

        <span className="border border-white rounded-3xl absolute bottom-5 left-5 p-2">
          {product.name}
        </span>
      </div>
      {/* content */}
      <div className="shadow p-3">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-[0.6rem] text-gray-600 my-1">
          {product.explanation.slice(0, 140)}
        </p>
        <span className="text-xs text-gray-600">{fullDate}</span>
        <h3 className="font-bold text-end">{product.price} ₺</h3>
      </div>
    </div>
  );
};

export default ProductItem;
