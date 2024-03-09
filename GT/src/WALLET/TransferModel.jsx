import "../Modal.css";
import { useEffect } from "react";
import transf from "../Images/transfer_img.png";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const TransferModel = ({closeModal, points, name, number }) => {
    const navigate= useNavigate();
    const notify = () => {

        toast("Result Submitted");
    };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const token = useSelector(state => state.userDetail.token);
  console.log(token)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchData(token, number, points);
    //   setIsSubmit(true);
    //   console.log('submitted result')
    } catch (error) {
      console.log(error);
    }
  };


  const fetchData = async (token,number, points) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee");

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      unique_token: token,
      amount: points,
      mobile_no: number,
      transfer_note: "",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch("https://kalyanmilanofficialmatka.in/api-user-transfer-wallet-balance", requestOptions);
    const result = await response.json();
    // console.log(result);
    // console.log('submit result out')
    if (result?.status === true) {
    //   console.log('submit result');
    notify();
    closeModal();
    } else {
      throw new Error("Invalid username and password");
    }
  };

  return (
    <>
      <div className="modal-wrapper rounded" onClick={closeModal}></div>
      <div className="modal-container text-black flex flex-col rounded-tr-xl rounded-br-xl rounded-bl-none rounded-tl-xl font-bold py-4 px-2">
        <div className="flex ">
            
        <div className="  bg-white items-center w-auto p-2 rounded-xl">
          <img className="w-32 h-32 " src={transf} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center ml-5 ">
            <p>Transfer To: </p>
            <p className=" items-center">{name} </p>
            <p>Amount: </p>
            <p className=" items-center">{points} </p>
            <p>Reciver's Phone </p>
            <p className="  items-center">{number} </p>
        </div>


        </div>
        <div className="flex justify-around mt-8 ">
        <button onClick={closeModal} className="model-btn p-4 px-6 bg-green-500 rounded-xl">
            CANCEL
          </button>
            <button className="bg-green-500 rounded-xl  px-6 p-4" onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </> 
  );
};
export default TransferModel;
