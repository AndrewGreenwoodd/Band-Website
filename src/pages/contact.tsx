import React from 'react'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'


const ContactPage: React.FC = () => {
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="description" content="contact mak" />
     </Head>
        <ContactForm/>
        </>
    )
}

export default ContactPage