import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%_-?<>^[]{}()~`'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-slate-950 flex justify-center items-center">
        <div className="w-full max-w-md py-6 px-9 bg-gray-800 rounded-lg">
          <h1 className="text-white text-center font-bold text-2xl">
            Password Generator
          </h1>
          <div className="flex w-full items-center space-x-2 my-7">
            <input
              className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 placeholder:text-white text-white selection:bg-blue-900 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Password"
              value={password}
              ref={passwordRef}
              readOnly = {true}
            />
            <button
              type="button"
              className=" w-48 rounded-md bg-blue-700 px-3 h-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={copyPasswordToClipBoard}
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
                max={20}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
                value={length}
              />
            </div>
            <div className="flex items-center text-white gap-3">
              <input
                type="checkbox"
                className="accent-blue-700 appearance-auto"
                id="numInput"
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numInput">Numbers </label>
            </div>
            <div className="flex items-center text-white gap-3">
              <input
                type="checkbox"
                id="charInput"
                className="accent-blue-700 appearance-auto"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="charInput">Special Characters </label>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className=" w-48 rounded-md bg-blue-700 px-3 h-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={passwordGenerator}
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
