import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, Loader2 } from "lucide-react";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
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

  return (
    <section ref={ref} id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Want to suggest a new language or report a translation error?{" "}
            {"We'd love to hear from you."}
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl shadow-orange-500/10">
          <CardHeader>
            <CardTitle className="text-gray-900">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  {"Thank you for reaching out. We'll get back to you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-orange-50/50 border-orange-200 text-gray-900 focus-visible:ring-orange-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-orange-50/50 border-orange-200 text-gray-900 focus-visible:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-900">
                    What would you like to tell us?
                  </Label>
                  <RadioGroup
                    value={formData.inquiryType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, inquiryType: value }))
                    }
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="new-language"
                        id="new-language"
                        className="border-orange-300 text-orange-500"
                      />
                      <Label
                        htmlFor="new-language"
                        className="text-gray-700 cursor-pointer"
                      >
                        Request a new language
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="translation-error"
                        id="translation-error"
                        className="border-orange-300 text-orange-500"
                      />
                      <Label
                        htmlFor="translation-error"
                        className="text-gray-700 cursor-pointer"
                      >
                        Report a translation error
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="other"
                        id="other"
                        className="border-orange-300 text-orange-500"
                      />
                      <Label
                        htmlFor="other"
                        className="text-gray-700 cursor-pointer"
                      >
                        Other inquiry
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={
                      formData.inquiryType === "new-language"
                        ? "Tell us about the language you'd like us to add..."
                        : formData.inquiryType === "translation-error"
                          ? "Please describe the error you found..."
                          : "How can we help you?"
                    }
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-orange-50/50 border-orange-200 text-gray-900 focus-visible:ring-orange-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
