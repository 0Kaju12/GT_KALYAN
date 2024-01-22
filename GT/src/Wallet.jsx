import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "./Images/wallet_transparent.png";
import phone_pe from "./Images/phone_pe.png";
import gpay from "./Images/gpay.png";
import frame from "./Images/frame_addfund.png"
import paytm from "./Images/paytm.png"
import { useNavigate } from "react-router-dom";
function Wallet() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const backStyle = {
    paddingBottom: "500px",
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
  };
  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    width: "400px", // Adjust the width as needed
    margin: "auto",
    borderRadius: "10px", // Add border-radius for rounded corners
    background: "linear-gradient(to right, #141384, #000000)", // Blue gradient background
    color: "#fff", // Text color
    marginBottom: "20px",
    height:"100px"
  };

  const box2 = {
    width: "90px",
    padding: "20px",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection:"column",
    background:"white",
    borderRadius:"20px",
    height:"95px"
  };

  const Container = {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  const box3 = {
    borderRadius: "10px",
    padding: "8px 12px 8px 9px",
    alignItems: "center", // Align items to the start (top) of the container
    width: "auto",
    color: "white",
    display:"flex",
    justifyContent:"center"
    
  };

  const radioImageStyle = {
    width: "30px", // Adjust the width as needed
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection:"column",

    
  };


  const backendValue = "Value from Backend";
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const addf = ()=>{
    navigate("/addfund");
  }
  return (
    <>
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          <img src={fund} alt="Wallet" />
          <h1 className="text-white px-3">Wallet</h1>
        </div>
      </div>
      <div className=" p-5" style={backStyle}>
        <div className="" style={box1}>
          <p>Current Balance</p>
          <p>RS 0</p>
        </div>

        <div style={Container}>
          <div>
            <button onClick={() => addf()} className= "bg-red-700" style={box3}>
              + Add Fund
            </button>
          </div>
          <div>
            <button className="bg-orange-500" style={box3}>
              - Withdraw Fund
            </button>
          </div>

          <div>
            <button className="bg-teal-500" style={box3}>
              Transfer
            </button>
          </div>
        </div>
        <div className="m-4" style={box4}>
          <img src={frame} alt="" />
        </div>
        <div style={Container}>
          <div className="mr-6" >
            <button style={box2}>
            <img src={phone_pe} alt="PhonePe" style={radioImageStyle} />
                PhonePe
            </button>
          </div>
          <div className="mr-6" >
            <button style={box2}>
            <img className= "mb-1 mt-2"src={paytm} alt="PhonePe" style={radioImageStyle} />
                Paytm
            </button>
          </div>

          <div >
            <button style={box2}>
            <img src={gpay} alt="PhonePe" style={radioImageStyle} />
                GPay
            </button>
          </div>
        </div>
        <h1 className="text-white mt-20 flex justify-center">
          Recent Transaction
        </h1>
      </div>
    </>
  );
}

export default Wallet;
