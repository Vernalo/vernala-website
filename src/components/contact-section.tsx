import { useState, forwardRef } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "new-language",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        inquiryType: "new-language",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inquiryTypes = [
    { value: "new-language", label: "Request a language" },
    { value: "translation-error", label: "Report an error" },
    { value: "other", label: "Other" },
  ];

  const getPlaceholderText = () => {
    if (formData.inquiryType === "new-language") {
      return "Tell us about the language you'd like us to add…";
    }
    if (formData.inquiryType === "translation-error") {
      return "Please describe the error you found…";
    }
    return "How can we help you?";
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-6 sm:px-10 lg:px-20 bg-canopy/40"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-[10px] tracking-widest uppercase text-savanna mb-3 block">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
            Get in Touch
          </h2>
          <p className="text-mist text-sm">
            Want to suggest a new language or report a translation error? We'd
            love to hear from you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-16 border border-white/10">
            <CheckCircle className="w-12 h-12 text-savanna mx-auto mb-5" />
            <h3 className="font-display text-2xl text-cream mb-2">
              Message Sent
            </h3>
            <p className="text-mist text-sm">
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[10px] tracking-widest uppercase text-mist/60 block"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-white/20 text-cream placeholder:text-mist/30 text-sm py-2 focus:outline-none focus:border-savanna/60 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] tracking-widest uppercase text-mist/60 block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-white/20 text-cream placeholder:text-mist/30 text-sm py-2 focus:outline-none focus:border-savanna/60 transition-colors"
                />
              </div>
            </div>

            {/* Inquiry type — styled toggles */}
            <div className="space-y-3">
              <span className="text-[10px] tracking-widest uppercase text-mist/60 block">
                What would you like to tell us?
              </span>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: type.value,
                      }))
                    }
                    className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                      formData.inquiryType === type.value
                        ? "border-savanna bg-savanna/10 text-savanna"
                        : "border-white/15 text-mist/60 hover:border-white/30 hover:text-mist"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[10px] tracking-widest uppercase text-mist/60 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={getPlaceholderText()}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-0 border-b border-white/20 text-cream placeholder:text-mist/30 text-sm py-2 focus:outline-none focus:border-savanna/60 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-savanna hover:bg-savanna/85 disabled:opacity-50 text-forest font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
