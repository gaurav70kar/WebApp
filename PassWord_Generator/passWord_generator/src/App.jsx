import { useState,useCallback, useEffect, useRef} from "react"

// import './App.css'
function App() {
  
  const [length,setlength]=useState(8)
  const [numberAllow,setnumberAllow]=useState(false)
  const [charAllow,setcharAllowed]=useState(false)
  const [password,setpassword]=useState("")

  // use of useref hook
  const passwordref=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_+{}[]`~"


    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
      
    }

    setpassword(pass)

  },[length , numberAllow,charAllow,setpassword])

  const copyPasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length , numberAllow ,charAllow ,passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
      p-4 m-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center p-2 text-lg ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          // className="outline-none w-full py-1 px-3"
          className="w-full px-4 py-3 rounded-lg text-lg text-gray-800 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordref}
          />
          <button className="outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0"
          onClick={copyPasswordtoclipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label> length :{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setnumberAllow((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
