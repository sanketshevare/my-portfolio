import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Alert,
} from "@material-tailwind/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSuccess("Message successfully sent!");
        },
        (error) => {
          console.log("Failed to send the email", error.text);
          setSuccess("Failed to send the message");
        }
      );

    setFormData({ to_name: "", from_name: "", email: "", message: "" });
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  }, [success]);

  return (
    <div className="bg-gray-400 w-full lg:h-full h-screen ">
      <h1 className="text-3xl font-bold uppercase pt-1">Contact me</h1>
      <Card className="rounded-none p-2">
        <form onSubmit={handleSubmit}>
          <Typography color="gray" className="">
            Nice to meet you!.
          </Typography>

          {success && (
            <Alert className="mb-2" color="green">
              {success}
            </Alert>
          )}
          <div className="w-1/4">
            <input
              type="text"
              name="to_name"
              value={"Sanket Shevare"}
              onChange={handleChange}
              className="hidden"
            />
          </div>
          <div className="w-4/5 lg:w-1/4 ml-auto mr-auto mb-3">
            <Input
              label="Name"
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="border-2 border-gray-900 bg-white"
            />
          </div>
          <div className="w-4/5 lg:w-1/4 ml-auto mr-auto mb-3">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-900 bg-white"
            />
          </div>
          <div className="w-4/5 lg:w-1/4 ml-auto mr-auto mb-3">
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-2 border-gray-900 bg-white"
            />
          </div>
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
