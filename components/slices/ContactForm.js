import { ValidationError, useForm } from '@formspree/react';
import Link from 'next/link'

const ContactForm = () => {
  const [state, submit] = useForm('contactForm');

  if (state.succeeded) {
    return (
      <div className="container mx-auto py-16 md:py-24 px-6 md:px-0">
        <h2 className="text-2xl mb-6">Thanks for reaching out, we will speak soon!</h2>
        <p>
          Your request for contact has been received. Not much else to see here. Might as well <Link href="/"><a className="text-blue-500 underline">make your back home.</a></Link>
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 md:py-24 px-6 xl:px-0">
      <form onSubmit={submit}>
        <label htmlFor="name" className="block w-full mb-4">
          <span className="text-gray-700 mb-1 block">Name</span>
          <input type="text" name="name" required className="form-input w-full" placeholder="Your name" />
        </label>
        <ValidationError field="name" prefix="Name" errors={state.errors} />

        <label htmlFor="email" className="block w-full mb-4">
          <span className="text-gray-700 mb-1 block">Email</span>
          <input type="email" name="email" required className="form-input w-full" placeholder="Your email" />
        </label>
        <ValidationError field="email" prefix="Email" errors={state.errors} />

        <label htmlFor="phone" className="block w-full mb-4">
          <span className="text-gray-700 mb-1 block">Phone Number</span>
          <input type="phone" name="phone" className="form-input w-full" placeholder="Your phone number" />
        </label>
        <ValidationError field="phone" prefix="Phone" errors={state.errors} />

        <label htmlFor="message" className="block w-full mb-4">
          <span className="text-gray-700 mb-1 block">Message</span>
          <textarea name="message" required rows="5" className="form-textarea w-full" placeholder="Your message" />
        </label>
        <ValidationError field="message" prefix="Message" errors={state.errors} />

        <button type="submit" className="w-full md:w-auto bg-blue-skies-500 text-white py-3 px-6 font-header hover:bg-blue-skies-600">Send Message</button>
      </form>
    </div>
  )
}
export default ContactForm
