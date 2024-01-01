import Loading from "./Loading";
import ProductItem from "./ProductItem";
const ProductList = ({ state }) => {
  return (
    <div className="flex flex-col gap-3 mb-7">
      <div>
        {state.searchParameters ? (
          <p>
            <span className="font-bold  text-red-600">
              {state.products.length}{" "}
            </span>{" "}
            items found in{" "}
            <span className="font-bold text-red-600">
              {state.searchParameters}{" "}
            </span>
            search
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="products">
        {state.isLoading ? (
          <Loading />
        ) : state.products.length > 0 ? (
          state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="font-bold text-center text-pink-600">
            Üzgünüz aradığınız ürün bulunamadı..
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
