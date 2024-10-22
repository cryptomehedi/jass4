import icon from "/Offer/success.svg";

const SendingModal = ({ valuePressed, success, sendingText }) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked
        id="sending-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle">
        <div className=" md:w-2/3 md:max-w-xl modal-box bg-white">
          <div className="text-black font-bold text-lg flex items-center justify-center">
            {sendingText}
            <span>
              {success && <img className="w-4 ml-1" src={icon} alt="Success" />}
            </span>
          </div>
          <progress
            className="progress progress-success w-full"
            value={valuePressed}
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default SendingModal;
