import React, { useEffect, useRef } from 'preact/compat';
import './style.css';

export function Contact() {
    let form;
    useEffect(() => {
        form = document.querySelector('form');
        form.addEventListener('submit', event => {
            // prevent the form submit from refreshing the page
            event.preventDefault()
          
            const { name, email, message } = event.target
            
            const endpoint = 'https://3qg72oz3s0.execute-api.eu-west-2.amazonaws.com/default/SendEmailFunction';

            const body = JSON.stringify({
                senderName: name.value,
                senderEmail: email.value,
                message: message.value
            });

            const requestOptions ={
                method: "POST",
                body
            };

            fetch(endpoint, requestOptions)
                .then((response) => {
                    if (!response.ok) throw new Error("Error in fetch");
                    return response.json();
                })
                .then((response) => {
                    document.getElementById('result-text')!.innerText = "Email sent successfully!";
                })
                .catch((error) => {
                    document.getElementById('result-text')!.innerText = 'An unknown error occured';
                })
          
          })
    }, []);

    return (
        <div class="contact">
            <form id="infoForm">
                <label for="name">Name:</label>
                <input name="name" type="text"/><br/><br/>
                <label for="email">Email:</label>
                <input name="email" type="email"/><br/><br/>
                <label for="name">Message:</label>
                <textarea name="message"></textarea><br/><br/>
                <input type="submit"/>
                <div>
                    <p id="result-text"></p>
                </div>
            </form>
        </div>
    );
}

