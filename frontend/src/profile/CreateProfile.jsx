
function CreateProfile () {
    return (
      <div className=" w-96 h-96">
   
      <div className="flex flex-col items-center rounded-xl mt-16 shadow-2xl">
  
        <img src="../src/assets/icon.png" alt="Profile picture" className="w-40 h-40 rounded-full" />
        
        <div className="grid gap-1">

        <p>Nombre:</p>
        <input type="text" className="text-3xl font-bold mt-4"></input>

        <p>Email:</p>
        <input type="email" className="text-3xl font-bold mt-4"></input>

        <p>Número de teléfono:</p>
        <input type="select" ></input>
        <input type="number" className="text-3xl font-bold mt-4"></input>
  
        </div>
  
  
  
      </div>
  
      </div>
    );
  }
  
  export default CreateProfile;