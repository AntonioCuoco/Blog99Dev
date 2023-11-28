
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
    >
      #{name}
    </Link>
  );
};

export default Category;
