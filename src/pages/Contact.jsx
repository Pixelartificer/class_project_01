import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
      <section className="my-16 lg:mt-27.5 lg:mb-22.5 bg-white">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="Get In Touch"
            className="flex justify-center items-center text-center mb-6"
          />
          
          {/* Section Subtitle / Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <PText 
              text="Have a question or want to work together? Feel free to send us a message and we'll get back to you as soon as possible."
              className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
            />
          </div>

          {/* Contact Layout Grid */}
          <Flex className="flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 w-full">
            
            {/* Left Side: Contact Info Cards */}
            <div className="w-full lg:w-[38%] flex flex-col gap-6">
              <div className="bg-sectionBg01 p-6 lg:p-8 rounded-3xl border border-gray-100 flex items-center gap-5">
                <div className="p-4 bg-bgGreen/10 rounded-2xl text-bgGreen">
                  <FiMapPin className="w-6 h-6 text-bgGreen" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blackText font-inter mb-1">Our Location</h4>
                  <p className="text-lightBlackText text-sm">Gulshan, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="bg-sectionBg01 p-6 lg:p-8 rounded-3xl border border-gray-100 flex items-center gap-5">
                <div className="p-4 bg-bgGreen/10 rounded-2xl text-bgGreen">
                  <FiMail className="w-6 h-6 text-bgGreen" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blackText font-inter mb-1">Email Us</h4>
                  <p className="text-lightBlackText text-sm">support@yourdomain.com</p>
                </div>
              </div>

              <div className="bg-sectionBg01 p-6 lg:p-8 rounded-3xl border border-gray-100 flex items-center gap-5">
                <div className="p-4 bg-bgGreen/10 rounded-2xl text-bgGreen">
                  <FiPhone className="w-6 h-6 text-bgGreen" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blackText font-inter mb-1">Call Us</h4>
                  <p className="text-lightBlackText text-sm">+880 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-[58%] bg-sectionBg01 p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
                <div>
                  <label className="block text-blackText font-medium mb-2 text-sm">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-bgGreen transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-blackText font-medium mb-2 text-sm">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-bgGreen transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-blackText font-medium mb-2 text-sm">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Write your message here..." 
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-bgGreen transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center gap-2 w-full py-4 px-8 bg-bgGreen text-white font-medium rounded-xl hover:bg-[#0a4639] transition-colors cursor-pointer shadow-sm"
                  >
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

          </Flex>

        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Contact;