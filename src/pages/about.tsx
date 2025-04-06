import SuccessMessage from "../components/sucess.message";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../zod/contact.schema";
import { z } from "zod";
import { Loader } from "lucide-react";
import { useState } from "react";

type ContactFormSchema = z.infer<typeof ContactSchema>;

function About() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const Submit = async (data: ContactFormSchema) => {
    // simmulate delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Form submitted:", data);
    reset();
    setIsSubmitted(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-6 text-sm text-gray-700">
      <section>
        <h3 className="text-lg font-bold text-green-700">What is AutoCal?</h3>
        <p>
          <strong>AutoCal</strong> is your smart and simple calendar generator.
          Whether you need a full-year planner or just a custom selection of
          months, AutoCal instantly creates a clean, downloadable calendar
          tailored to your needs. From students and professionals to project
          managers, AutoCal makes planning effortless.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-green-700">Features</h3>
        <ul className="list-disc list-inside">
          <li>
            Generate full-year, quarterly, half-year, or monthly calendars
          </li>
          <li>View calendars in a neat, responsive layout</li>
          <li>Download your calendar as a printable PDF</li>
          <li>Simple and intuitive user experience</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold text-green-700">Contact the CTO</h3>
        <form onSubmit={handleSubmit(Submit)} className="space-y-3">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              {...register("name")}
              className="input w-full"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              {...register("email")}
              className="input w-full"
              placeholder="joe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={3}
              className="input w-full"
              placeholder="Tell me something..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          {isSubmitted && (
            <AnimatePresence>
              {isSubmitted && (
                <SuccessMessage text="Thank you for reaching out! Your message has been sent." />
              )}
            </AnimatePresence>
          )}
          <button
            type="submit"
            className="btn-style py-2 px-4 bg-green-600 text-white hover:bg-green-700 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <Loader className="animate-spin" size={18} />
                <span className="inline-block animate-pulse">Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </section>
    </div>
  );
}

export default About;
