import { useDispatch, useSelector } from "react-redux";
import { CounterSlice } from "../components/CounterSlice.jsx";

function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.value;
  });

  return (
    <div className=" bg-slate-100 w-11/12 mt-2 rounded shadow-inner flex justify-center items-center h-screen mx-auto">
      <button
        className="px-4 p-2 mx-4 border rounded shadow-inner hover:text-white hover:bg-blue-400 hover:duration-700"
        onClick={() => dispatch(CounterSlice.actions.increment())}
      >
        Increase
      </button>
      {counter}
      <button
        className="px-4 p-2 mx-4 border rounded shadow-inner hover:text-white hover:bg-blue-400 hover:duration-700"
        onClick={() => dispatch(CounterSlice.actions.decrement())}
      >
        Decrease
      </button>
    </div>
  );
}

export default Home;

// className="px-4 p-2 mx-4 border rounded shadow-inner hover:text-white hover:bg-blue-400 hover:duration-700"
