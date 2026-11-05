import Image from "../components/Image";

const CounteerCard = ({ imageSrc, number, label, imageAlt, className }) => {
  return (
    <>
      {/* 
        Responsive CounteerCard Component:
        - Mobile: Full width, comfortable padding, and flexible alignment.
        - Tablet & Desktop (sm:): Controlled width and structured spacing.
      */}
      <div className="flex items-center gap-4 sm:gap-6 rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100 w-full sm:max-w-xs">
        
        {/* Icon Wrapper */}
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-pText p-2 sm:p-3">
          <Image imageSrc={imageSrc} imageAlt={imageAlt} className={className} />
        </div>

        {/* Counter Content */}
        <div>
          <h2 className="font-inter text-text22 sm:text-text30 font-bold text-blueText leading-none">
            {number}
          </h2>
          <p className="mt-1.5 sm:mt-2 font-roboto text-text14 sm:text-text16 font-medium text-lightBlackText">
            {label}
          </p>
        </div>
      </div>
    </>
  );
};

export default CounteerCard;