import React from "react"

const Template = ({item}) => {
  return (
    <div className="text-[18px]">
      <p className="text-[#ff0045]">{item[0]}</p>
      <p className="text-[#9babab]">{item[1]}</p>
    </div>
  )
};

export default Template;
