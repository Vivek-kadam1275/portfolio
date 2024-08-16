import React from "react"

const Template = ({item}) => {
  return (
    <div className="text-[18px]">
      <p className="text-[#ff0045]">{item.title}</p>
      <p className="text-[#9babab]">{item.value}</p>
    </div>
  ) 
};

export default Template;
