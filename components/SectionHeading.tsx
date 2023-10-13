// import React from "react";

// type SectionHeadingProps = {
//     children: React.ReactNode
// }

// const SectionHeading: React.FC<SectionHeadingProps> = ({children}) => {
//   return <div>{children}</div>;
// };

// export default SectionHeading;

import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </div>
  );
}
