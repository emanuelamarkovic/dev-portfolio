interface ContactProps {}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-first py-20 px-6 md:px-12 flex justify-center items-center z-10 -mt-[100px] mb-[140px] clip-contact"
    >
      <div className="container max-w-[90%] md:max-w-[1200px] w-full md:w-[70%] pt-[20vh] pb-20">
        <div className="flex flex-col md:flex-row justify-between heading-wrapper">
          <div className="heading mb-8 md:mb-0">
            <p className="title text-3xl md:text-4xl leading-[2.4rem] text-white">
              Want to <br />
              contact me?
            </p>
            <div className="separator bg-text w-[100px] md:w-[150px] h-[2px] my-4"></div>
            <p className="subtitle text-lg md:text-xl text-white">
              Please, use the form below or send an email to{" "}
              <span className="mail italic text-white">
                emanuela.markovic
                <span className="text-text mx-1">@</span>
                hotmail
                <span className="text-text mx-1">.</span>
                com
              </span>
              :
            </p>
          </div>
          <div className="social"></div>
        </div>
        <form id="contact-form" action="#" className="mt-4">
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            className="w-full p-4 text-white bg-transparent border-b border-white text-lg md:text-2xl focus:border-text outline-none transition duration-200"
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            required
            className="w-full p-4 text-white bg-transparent border-b border-white text-lg md:text-2xl focus:border-text outline-none transition duration-200 mt-4"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-full p-4 text-white bg-transparent border-b border-white text-lg md:text-2xl focus:border-text outline-none transition duration-200 mt-4"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-text text-white mt-4 px-6 py-2 cursor-pointer hover:bg-white hover:text-[#333] transition-all float-right"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
