import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// function Button() {
//   return (
//     <button type="button" className="btn btn-primary">
//       Primary
//     </button>
//   );
// }

// export default Button;
