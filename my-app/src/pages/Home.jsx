import { useDispatch, useSelector } from "react-redux";
import { CounterSlice } from "../components/CounterSlice.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { dataContext } from "../components/dataContext.jsx";

function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.value;
  });

  const { data, setData } = useContext(dataContext);

  function handleIncrease() {
    return setData((data) => data + 1);
  }
  function handleDecrease() {
    return setData((data) => (data >= 1 ? data - 1 : "0"));
  }

  return (
    <div className="bg-slate-20">
      <NavBar />
      {/* redux toolkit methods */}
      <div className="flex text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 w-11/12 mt-2 rounded shadow-inner  justify-center items-center h-72 mx-auto">
        <h2 className="text-white font-bold">Redux Toolkit</h2>

        <button
          className=" text-white px-4 p-2 mx-4 border rounded shadow-xl hover:text-white hover:bg-blue-400 hover:duration-700"
          onClick={() => dispatch(CounterSlice.actions.increment())}
        >
          Increase
        </button>
        {counter}
        <button
          className=" text-white px-4 p-2 mx-4 border rounded shadow-xl hover:text-white hover:bg-blue-400 hover:duration-700"
          onClick={() => dispatch(CounterSlice.actions.decrement())}
        >
          Decrease
        </button>
      </div>

      {/* usecontext method */}
      <div className=" text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 w-11/12 mt-2 rounded shadow-xl flex justify-center items-center h-72 mx-auto">
        <h2 className="text-white font-bold">UseContext</h2>

        <button
          className="  px-4 p-2 mx-4 border rounded shadow-xl hover:text-white hover:bg-blue-400 hover:duration-700"
          onClick={handleIncrease}
        >
          Increase
        </button>
        {data}
        <button
          className=" px-4 p-2 mx-4 border rounded shadow-lg hover:text-white hover:bg-blue-400 hover:duration-700"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// className="px-4 p-2 mx-4 border rounded shadow-inner hover:text-white hover:bg-blue-400 hover:duration-700"
