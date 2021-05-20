import React from 'react';
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <section className="contact__container bd-grid section" id="contact">
            <div className='contactFull'>
                <ContactInfo title='Call Me' items={['(+373) 067307014', '(+40) 0720587195']}/>
                <ContactInfo title='E-mail' items={['mseighit@gmail.com', 'seighitm@mail.ru']}/>
                <ContactInfo title='Location' items={['Romania, Timisoara', 'R.Moldova, Causeni']}/>
            </div>
        </section>
    );
};

export default Contact;