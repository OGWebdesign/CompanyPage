export const ContactForm = () => {
  return (
  <div className="flex flex-col justify-center items-center">
    <h1>Contact Form</h1>
    <form className="flex flex-col justify-center items-center">
      <input type="text" placeholder="Name" className="mt-5 text-center" />
      <input type="email" placeholder="Email" className="mt-5 text-center" />
      <textarea placeholder="Message" className="mt-5 text-center"/> 
      <button type="submit" className="my-5 text-white bg-[#98f144] py-1 px-6 rounded-lg">Send Request</button>
    </form>
  </div>
  );
};
