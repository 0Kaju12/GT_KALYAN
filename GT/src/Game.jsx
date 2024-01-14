import { BiArrowBack } from "react-icons/bi";
import url1 from "./Images/single_digit.png";
import url2 from "./Images/jodi_digit.png";
import url3 from "./Images/single_panna.png";
import url4 from "./Images/double_panna.png";
import url5 from "./Images/triple_panna.png";
import url6 from "./Images/half_sangam.png";
import url7 from "./Images/full_sangam.png";
import topBackground from "./Images/bg.png";

function Game() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const cardStyle = {
    width:'100vh',
    height:'450px'
  };

  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover", // This will make the background image cover the container without
    backgroundPosition: "center",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: "150px",
    marginTop:"-10px"
  };

  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4">
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3 ">SUPREME DAY</h1>
        </div>
      </div>

      <div className=" h-screen" style={backStyle}>
        <div className="grid grid-cols-2 gap-0" style={cardStyle}>
          <div className="col-span-1 sm:w-2/3 md:w-3/4  lg:w-1/1    p-4">
            <button className="flex justify-center items-center">
              <img src={url1} alt="Image 1" className="w-32 h-32 " />
            </button>
          </div>
          <div className="col-span-1 sm:w-2/33 md:w-3/4 lg:w-1/1   p-4">
            <button className="flex justify-center items-center ">
              <img src={url2} alt="Image 2" className="w-32 h-32 " />
            </button>
          </div>

          {/* Second row with two columns */}
          <div className="col-span-1 sm:w-2/3 md:w-3/4  lg:w-1/1 p-4">
            <button className="flex justify-center items-center">
              <img src={url3} alt="Image 3" className="w-32 h-32 " />
            </button>
          </div>
          <div className="col-span-1 sm:w-2/3 md:w-3/4  lg:w-1/1 p-4">
            <button className="flex justify-center items-center">
              <img src={url4} alt="Image 4" className="w-32 h-32 " />
            </button>
          </div>

          {/* Third row with one column */}
          <div className="col-span-2 sm:w-2/3 md:w-3/4 lg:w-1/1  flex justify-center items-center ">
            <button className="flex justify-center items-center ">
              <img src={url5} alt="Image 5" className="w-32 h-32 " />
            </button>
          </div>

          {/* Fourth row with two columns */}
          <div className="col-span-1 sm:w-2/3 md:w-3/4 lg:w-1/1   p-4">
            <button className="flex justify-center items-center">
              <img src={url6} alt="Image 6" className="w-32 h-32 " />
            </button>
          </div>
          <div className="col-span-1 sm:w-2/3 md:w-3/4 lg:w-1/1 p-4">
            <button className="flex justify-center items-center">
              <img src={url7} alt="Image 7" className="w-32 h-32 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
