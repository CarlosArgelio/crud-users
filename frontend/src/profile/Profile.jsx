
function Profile () {
  return (
    <div className="">
 
    <div className="flex flex-col items-center w-96 h-96 rounded-xl mt-16 shadow-2xl">

      <img src="../src/assets/icon.png" alt="Profile picture" className="w-40 h-40 rounded-full" />

      <h2 className="text-3xl font-bold mt-4">Nombre:</h2>

      <p className="text-gray-500 mt-2 text-lg">email:</p>
      <p className="mt-4 text-gray-700 text-lg" >número : </p>

    </div>

    </div>
  );
}

export default Profile;