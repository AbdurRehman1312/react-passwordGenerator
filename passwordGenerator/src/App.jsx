import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-full max-w-md py-6 px-9 bg-gray-800 rounded-lg">
          <h1 className="text-white text-center font-bold text-xl">
            Password Generator
          </h1>
          <div class="flex w-full items-center space-x-2 my-7">
            <input
              class="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 placeholder:text-white text-white selection:bg-blue-900 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Password"
            />
            <button
              type="button"
              class=" w-48 rounded-md bg-blue-700 px-3 h-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-white gap-3">
              <label htmlFor="">Length : {length}</label>
              <input
                type="range"
                min={0}
                max={30}
                className=""
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="flex items-center text-white gap-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="accent-blue-700 appearance-auto"
              />
              <label htmlFor="">Numbers </label>
            </div>
            <div className="flex items-center text-white gap-3">
              <input
                type="checkbox"
                name=""
                id=""
                className="accent-blue-700 appearance-auto"
              />
              <label htmlFor="">Special Characters </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
