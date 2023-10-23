"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-500 -mt-6 dark:text-white/80">
        Reach me here{" "}
        <a href="mailto:abdulrauflukman@gmail.com" className="underline">
          abdulrauflukman@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          formRef.current?.reset();
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
