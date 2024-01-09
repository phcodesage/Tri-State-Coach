import { SfInput, SfButton } from '@storefront-ui/react';
import { useState, ChangeEvent, FormEventHandler } from 'react';
import React from 'react';
import TopNavMenu from '../Components/TopNavMenu';
import Footer from '../Components/Footer';
export default function ContactUs() {
  const [emailInvalid, setEmailInvalid] = useState(true);
  const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleEmailValidation = (event: ChangeEvent<HTMLInputElement>) =>
    emailRegExp.test(event?.target.value) ? setEmailInvalid(false) : setEmailInvalid(true);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <div className='flex flex-col h-screen'>
      <TopNavMenu />
      <h3 className="font-bold typography-headline-4 md:typography-headline-3 text-center mt-6">Send us a message</h3>
      <div className='flex-grow flex flex-col md:flex-row p-4 md:p-10'>
      <form className="flex-grow gap-y-4" onSubmit={onSubmit}>
        
        <SfInput
          name="name"
          placeholder="Full Name"
          className="mb-4"
          required
        />

        <SfInput
          name="email"
          placeholder="email@email.com"
          className="mb-4"
          onChange={handleEmailValidation}
          invalid={emailInvalid}
          autoComplete="email"
          required
        />
        {emailInvalid && <p className="typography-error-sm text-negative-700 font-medium mt-0.5">Please provide a valid email</p>}

        <SfInput
          name="message"
          placeholder="Leave us a message..."
          className="mb-4"
          multiline
          rows={4}
          required
        />

        <SfButton type="submit">Submit</SfButton>
      </form>

      <div className="flex-grow mt-6 p-4 md:p-10">
        <h4 className="font-bold typography-headline-4 md:typography-headline-3">TRI-STATE COACH</h4>
        <p>38 Southern Blvd. Ste 5<br />
        Nesconset NY 11767<br />
        (631) 543 2500<br />
        <a href="mailto:tristatecoachbus@gmail.com">tristatecoachbus@gmail.com</a></p>
      </div>
    </div>
    <Footer />
    </div>

  );
}
