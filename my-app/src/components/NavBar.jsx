
function NavBar() {
  return (
    <div className="h-24 list-none flex justify-center items-center font-bold">
      <h2 className="[&>*]:text-gray-700 [&>*]:cursor-pointer flex justify-evenly w-10/12 border h-10 items-center "><li>home</li>
      <li>gallery</li>
      <li>product</li></h2>
    </div>
  );
}

export default NavBar;
