
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
    >
      <p className="w-fit" style={{backgroundColor:"#000" ,border: 3,borderColor:"cyan",borderStyle:"solid",borderRadius:18,padding:8,color:"white",fontSize:"0.875rem"}}>{name}</p>
    </Link>
  );
};

export default Tag;
