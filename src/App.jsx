const App = () => {

  return (
    <div className="App flex flex-col items-center justify-center w-full h-screen">

      {/* Todos Container */}
      <div className="bg-slate-200 w-10/12 h-[90vh] rounded-2xl text-black p-7 text-center ">

        {/* Todos Header */}
        <div className="text-4xl mb-14">
          <h1 className="mb-4">Add a todo</h1>
          <form>
            <input className="bg-slate-50 mr-4" type="text" />
            <button type="submit">Add</button>
          </form>
        </div>

        {/* Todos List */}
        <ul>
          {/* Todo Item */}
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nostrum?
            {/* Remove Button */}
            <button className="bg-slate-900 text-white p-2 mb-4">Remove</button>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default App
