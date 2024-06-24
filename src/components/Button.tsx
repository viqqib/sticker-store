// components/Button.tsx

import React from 'react';

type ButtonProps = {
  text: string; // Define text prop as string
  link: string;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <button className="px-5 py-2 duration-300 rounded-md bg-greenst text-creamst hover:bg-redKoala">
      <a href={link}>{text}</a>
    </button>
  );
};

export default Button;
