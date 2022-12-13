import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY,
        )
            .then((result) => {
                console.log(result.text);
                console.log(result);
                toast.success('Your message received successfully');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='my-8'>
            <Toaster position='top-center' />
            <h1 className='text-center text-3xl font-bold'>Contact US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='flex justify-between flex-col mb-10'>
                    <h2 className='text-4xl font-bold'>Let's work together?</h2>
                    <div className='space-y-3'>
                        <h3>Contact info</h3>
                        <p>Ajax Court, Scunthorpe, DN15 8QH, UK</p>
                        <p>Tel: +4407533775656</p>
                        <p>Email: ashrafcse3@gmail.com</p>
                        <div className='flex'>
                            <a target='_blank' rel='noreferrer' href='https://github.com/ashrafcse3?tab=repositories'><AiFillGithub className='mr-2' /></a>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ashrafcse3/'><AiFillLinkedin className='mr-2' /></a>
                            <a target='_blank' rel='noreferrer' href='https://stackoverflow.com/users/13788415/ashraful-alam'><FaStackOverflow className='mr-2' /></a>
                            {/* <a target='_blank' rel='noreferrer' href=''> <AiOutlineTwitter className='' /></a> */}
                            <AiOutlineTwitter className='' />



                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='my-6 flex flex-col'>
                    {/* <label>Name</label> */}
                    <input required type="text" name="user_name" placeholder='Your name' className='px-2 py-5 border-b border-grey' />
                    {/* <label>Email</label> */}
                    <input required type="email" name="user_email" placeholder='Your email' className='mt-2 px-2 py-5 border-b border-grey' />
                    {/* <label>Message</label> */}
                    <textarea required name="message" placeholder='How we can help you' className='mt-2 px-2 py-3  border-b border-grey' rows='7' />
                    <input type="submit" value="Send your message" className='btn btn-primary mt-4 capitalize' />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;