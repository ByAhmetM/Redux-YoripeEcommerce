import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import { getProduct } from "./redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const state = useSelector((store) => store);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      {isOpen && (
        <div className="px-7 py-3">
          <About />
        </div>
      )}

      <div className="px-7 py-5">
        <Header toggle={toggle} />
      </div>
      <div className="px-7">
        <ProductList state={state} />
      </div>

      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default App;
