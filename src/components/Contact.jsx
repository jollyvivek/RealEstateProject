import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b41818b4-ce4d-4755-ac6b-4e4fe66e1c33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact
        <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>  
        <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>
      <form action="" onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
             <label htmlFor="Name"> Your Name </label>
              <input type="text" className='w-full border border-gray-500 rounded py-3 px-4 mt-2' id="Name" autoComplete='off' placeholder='Your Name ' name="Name" required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              <label htmlFor="Email">Your Email </label>
              <input type="email" className='w-full border border-gray-500 rounded py-3 px-4 mt-2' id="Email" autoComplete='off' placeholder='Your Email ' name="Email" required />
            </div>
        </div>
        <div className='my-6 text-left'>
          <label htmlFor="Message" className='mt-2'>Message</label>
          <textarea className='w-full border border-gray-500 rounded py-3 px-4 mt-2 resize-none' id='Message' placeholder='Message' name="Message" required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12  mb-10 rounded'>{result ? result :"Send Message"}</button>
      </form>
    </div>
  )
}

export default Contact