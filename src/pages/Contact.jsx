import { useState } from 'react';

const emptyForm = { fullName: '', email: '', subject: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setSubmitted(false);
  }

  function validate() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(emptyForm);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Email:</strong> info@lospolloshermanos.example
          </p>
          <p>
            <strong>Phone:</strong> +234 800 000 0000
          </p>
          <p>
            <strong>Address:</strong> 12 Sample Street, Lagos
          </p>
          <p className="note">(Sample contact details)</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="btn">
            Submit
          </button>

          {submitted && (
            <p className="success">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
