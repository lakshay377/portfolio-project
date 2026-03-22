import { useState } from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
await emailjs.send(
  "service_oitwa6e",  // service ID
  "template_mtjm60h", // template ID
  {
    name: formData.name,      // → {{name}} in body + From Name
    email: formData.email,    // → {{email}} in Reply To
    message: formData.message // → {{message}} in body
  },
  "3i47TNEG_6yKjFVC0"  // public key
);

      toast({
        title: "Message sent!",
        description: "Email sent successfully ✅",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message ❌",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to build something amazing? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-8">
              <Card className="glass-card p-6 rounded-xl border-slate-700/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Get In Touch
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center">
                      <Mail className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-slate-300 font-medium">Email</p>
                        <a href="mailto:your@email.com" className="text-white hover:text-primary">
                          lakshaybhati377@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaLinkedin className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-muted-foreground font-medium">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/lakshay-bhati-377/" target="_blank" className="text-foreground hover:text-primary">
                          Lakshay Bhati
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaGithub className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-muted-foreground font-medium">GitHub</p>
                        <a href="https://github.com/lakshay377" target="_blank" className="text-foreground hover:text-primary">
                          Lakshay Bhati 
                        </a>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT SIDE FORM */}
            <Card className="glass-card p-8 rounded-xl border-slate-700/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label>Message</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}