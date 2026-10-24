
import { FaChevronDown } from "react-icons/fa";

const ListItem = ({text, classname, type}) => {
  return (
    <>
      <li className={`text-text16 text-pText font-medium font-inter flex gap-2 items-center cursor-pointer ${classname} `}> {text} 
        {
          type && <FaChevronDown />
        }</li>
    </>
  )
}

export default ListItem
