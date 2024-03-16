import { useState } from "react"
import { MdNotificationsActive } from "react-icons/md";

export default function DropDown( message) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleOpenDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  return (
    <fieldset>
      <button
        className="py-2 px-2 bg-emerald-300 rounded-md font-bold 
        relative before:content-['Open'] hover:before:block before:absolute 
        before:bottom-full before:left-1/2 before:-translate-x-1/2 before:bg-black 
        before:text-white before:py-1 before:px-2 before:rounded-md before:text-sm before:z-10 before:hidden"
        onClick={toggleOpenDropdown}
      >
        <MdNotificationsActive />
      </button>
      {isDropdownOpen && (
        <div className="">
          <p>I am Open {message}</p>
        </div>
      )}
    </fieldset>
  )
}