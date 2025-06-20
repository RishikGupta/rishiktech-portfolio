import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("meokkbjp");

  useEffect(() => {
  if (state.succeeded) {
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  }
}, [state.succeeded]);


  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-theme text-theme py-20 m-0"
    >
      <RevealOnScroll>
        <div className="px-4 w-screen max-w-3xl mx-auto sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-accent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Name */}
            <RevealOnScroll>
              <div className="relative group">
                <div className="absolute -inset-0.5 gradient-glow rounded-lg blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="Name..."
                  className="relative w-full bg-card text-theme placeholder-muted px-4 py-3 rounded-lg border border-theme focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            </RevealOnScroll>

            {/* Email */}
            <RevealOnScroll>
              <div className="relative group">
                <div className="absolute -inset-0.5 gradient-glow rounded-lg blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="example@gmail.com"
                  className="relative w-full bg-card text-theme placeholder-muted px-4 py-3 rounded-lg border border-theme focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </RevealOnScroll>

            {/* Message */}
            <RevealOnScroll>
              <div className="relative group">
                <div className="absolute -inset-0.5 gradient-glow rounded-lg blur opacity-0 group-focus-within:opacity-100 transition duration-300" />
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={5}
                  placeholder="Your Message..."
                  className="relative w-full bg-card text-theme placeholder-muted px-4 py-3 rounded-lg border border-theme focus:outline-none resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <button
                disabled={state.submitting}
                type="submit"
                className="w-full bg-accent text-button py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-accent"
              >
                Send Message
              </button>
            </RevealOnScroll>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
