import React from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

const Sortable = ({children, handleSort, sort_by,align }) => {
    console.log(sort_by)
    
  
  return (
    <div className={`flex items-center gap-1 ${align === "right" ? "justify-end" : "justify-start"}`}>
    <span className=" flex flex-col">
      <button
        className=" hover:bg-stone-300"
        onClick={handleSort.bind(null, {
          sort_by: sort_by,
          sort_direction: "asc",
        })}
      >
        <HiChevronUp/>
      </button>
      <button
        className=" hover:bg-stone-300"
        onClick={handleSort.bind(null, {
          sort_by: sort_by,
          sort_direction: "desc",
        })}
      >
        <HiChevronDown />
      </button>
    </span>
    <span>{children}</span>
  </div>
  )
}

export default Sortable