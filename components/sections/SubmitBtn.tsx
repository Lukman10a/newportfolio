// "use client";

// import React from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
// import { FaPaperPlane } from "react-icons/fa";

// export default function SubmitBtn() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
//       disabled={pending}
//     >
//       {pending ? (
//         <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
//       ) : (
//         <>
//           Submit{" "}
//           <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
//         </>
//       )}
//     </button>
//   );
// }

"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleSubmit = () => {
    setPending(true);
    // Perform your form submission logic here.
    // After the submission is complete,
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
      onClick={handleSubmit}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
