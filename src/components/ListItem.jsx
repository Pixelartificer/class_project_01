import { FaChevronDown } from "react-icons/fa";

const ListItem = ({ text, classname, type }) => {
  return (
    <>
      {/* 
        Responsive ListItem Component:
        - Mobile & Tablet: Compact text size and spacing.
        - Desktop (sm:): Full defined text-text16 size with clean flex alignment and pointer interaction.
      */}
      <li className={`text-text14 sm:text-text16 text-pText font-medium font-inter flex gap-2 items-center cursor-pointer transition-colors duration-200 ${classname}`}> 
        {text} 
        {type && (
          <FaChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200" />
        )}
      </li>
    </>
  );
};

export default ListItem;