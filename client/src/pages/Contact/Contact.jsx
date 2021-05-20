import React, {useState} from 'react';
import useInput from "../../components/CustomHooks/useInput";
import Input from "./Input";
import ContactInfo from "./ContactInfo";
import './contact.css'
import axios from "axios";

const Contact = () => {
    const email = useInput('', {isEmpty: true, isEmail: true})
    const username = useInput('', {isEmpty: true, minLength: 5, maxLength: 20})
    const subject = useInput('', {isEmpty: true, minLength: 5, maxLength: 20})
    const [message, setMessage] = useState('')

    let usernameTypeValidation = ((username.isDirty && username.isEmpty) ? '<div>Field Is Empty!</div>' : '')
        + ((username.isDirty && username.minLengthError) ? '<div>Minimum number of characters is 5!</div>' : '')
        + ((username.isDirty && username.maxLengthError) ? '<div>Maximum number of characters is 20!</div>' : '')

    let subjectTypeValidation = ((subject.isDirty && subject.isEmpty) ? '<div>Field Is Empty!</div>' : '')
        + ((subject.isDirty && subject.minLengthError) ? '<div>Minimum number of characters is 5!</div>' : '')
        + ((subject.isDirty && subject.maxLengthError) ? '<div>Maximum number of characters is 20!</div>' : '')

    let emailTypeValidation = ((email.isDirty && email.isEmpty) ? '<div>Field Is Empty!</div>' : '')
        + ((email.isDirty && email.isEmail) ? '<div>Incorrect email!</div>' : '')

    const click = (e) => {
        e.preventDefault()
        console.log(email.value)
        axios.post('http://localhost:5000/', {
            email: email.value,
            subject: subject.value,
            message: message,
            name: username.value
        })
    }

    return (
        <section className="contact__container bd-grid section" id="contact">
            <form action="" className="contact__form " id="contact__form">
                <Input inputType={username} name='Name' typeValidation={usernameTypeValidation}/>
                <Input inputType={email} name='Email' typeValidation={emailTypeValidation}/>
                <Input inputType={subject} name='Subject' typeValidation={subjectTypeValidation}/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" name="message"
                          cols="0" rows="10" placeholder="Message"
                          className="contact__input"/>
                <input disabled={!email.inputValid || !username.inputValid || !subject.inputValid}
                       onClick={(e) => click(e)} type="submit" value="Send Message"
                       className="button contact__button"
                       style={{opacity: !(!email.inputValid || !username.inputValid || !subject.inputValid) ? '' : '80%'}}/>
            </form>

            <div className='contactFull'>
                <ContactInfo title='Call Me' items={['(+373) 067307014', '(+40) 0720587195']}/>
                <ContactInfo title='E-mail' items={['mseighit@gmail.com', 'seighitm@mail.ru']}/>
                <ContactInfo title='Location' items={['Romania, Timisoara', 'R.Moldova, Causeni']}/>
            </div>
        </section>
    );
};

export default Contact;