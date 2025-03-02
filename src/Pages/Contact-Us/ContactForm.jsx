/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
// import isEmail from "validator/lib/isemail";
// import emailjs from "@emailjs/browser";
import SendingModal from "./SendingModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [valuePressed, setValuePressed] = useState(0);
  const [sendingText, setSendingText] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

  const handleEml = (e) => {
    e.preventDefault;
  };

  // const handleEmail = (e) => {
  //   e.preventDefault();

  //   if (name && email && message && phone) {
  //     if (phone.length > 10 && phone.length < 12) {
  //       setSending(true);
  //       setSendingText("Email Sending Please wait...");
  //       setValuePressed(20);
  //       if (isEmail(email)) {
  //         setValuePressed(50);
  //         emailjs
  //           .sendForm(
  //             "service_jass4",
  //             "template_jass4",
  //             form.current,
  //             "afeU9_MAjsMDpy3l5"
  //           )
  //           .then(
  //             (result) => {
  //               setValuePressed(70);
  //               setError("");
  //               setName("");
  //               setPhone("");
  //               setEmail("");
  //               setMessage("");

  //               if (result.status === 200) {
  //                 setSuccess(true);
  //                 setValuePressed(100);
  //                 setSendingText("Email Sent Successfully");
  //                 setTimeout(() => {
  //                   setSending(false);
  //                 }, 4000);
  //                 e.target.reset();
  //               }
  //               console.log(result.status);
  //             },
  //             (error) => {
  //               setSendingText(error.text);
  //               setValuePressed(0);
  //               console.log(error.text);
  //             }
  //           );
  //       } else {
  //         setError("Please Put Your Valid Email Address");
  //         setSending(false);
  //       }
  //     } else {
  //       setError("Please Put Your 11 Digits Phone Number");
  //     }
  //   } else {
  //     setError("Enter all the fields");
  //   }
  // };

  return (
    <div className="">
      <div className="min-h-screen w-full md:py-6 flex flex-col justify-center py-10">
        <div className="relative py-3  sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>

              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form
              onSubmit={handleEml}
              ref={form}
              className="text-black dark:text-white"
            >
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                disabled
                placeholder="Name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                disabled
                placeholder="Phone Number"
                name="user_phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                disabled
                placeholder="Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Type your message here..."
                name="message"
                disabled
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error && (
                <p className="text-lg mb-4 text-red-800 font-bold">{error}</p>
              )}
              {/* <input type="hidden" name="_captcha" value="false"></input> */}
              {/* <input type="hidden" name="country" value={country.country_name}></input> */}
              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled
                  // disabled={sending}
                  value="Send ➤"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {sending && (
        <SendingModal
          success={success}
          sendingText={sendingText}
          valuePressed={valuePressed}
        />
      )}
    </div>
  );
};

export default ContactForm;
