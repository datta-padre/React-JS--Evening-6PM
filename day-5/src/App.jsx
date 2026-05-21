import "./App.css"

function App(){
  return(
    <>
    <header className="h-[100px] w-screen bg-black text-white dark:text-red-400 flex items-center justify-between p-2">
      <div>
        <h2  className="text-4xl font-bold">A2Z IT HUB</h2>
      </div>

      <div className="flex items-center justify-center gap-5">
        <h2 className="h2">Home</h2>
        <h2>About</h2>
        <h2>Service</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>

      <div>
        <button className="py-3 px-5 bg-red-500 border mx-3">logout</button>
        <button className="py-3 px-5 bg-blue-500 border">profile</button>
      </div>
    </header>
    </>
  )
}

export default  App;

