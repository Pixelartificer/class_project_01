import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const Error404 = () => {
  return (
    <>
      <section className="my-16 lg:mt-27.5 lg:mb-22.5 bg-white">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 px-6 bg-sectionBg01 rounded-3xl border border-gray-100 shadow-sm">
            
            {/* 404 Big Heading */}
            <h1 className="text-7xl lg:text-9xl font-extrabold text-bgGreen font-inter mb-4 tracking-wider">
              404
            </h1>

            {/* SubHeading */}
            <SubHeading
              text="Oops! Page Not Found"
              className="flex justify-center items-center text-center mb-4 text-2xl lg:text-3xl"
            />
            
            {/* Description */}
            <div className="mb-8">
              <PText 
                text="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
                className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-4 px-8 bg-bgGreen text-white font-medium rounded-xl hover:bg-[#0a4639] transition-colors cursor-pointer shadow-sm"
              >
                <FiHome className="w-4 h-4" />
                Back To Home
              </a>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-4 px-8 bg-white text-blackText border border-gray-200 font-medium rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <FiArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default Error404;