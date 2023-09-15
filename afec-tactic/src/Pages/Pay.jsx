import React, { useState, useEffect } from "react";


export default function App() {
    const [price, setPrice] = useState("");



    const submit = async (e) => {
        const query = new URLSearchParams(window.location.search);
        const response = await fetch('https://afecapp.onrender.com/stripe/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: 'price_1NpwVkDCxZVJxL3fJNHGpzm2'
            })
        });
        const data = await response.json();
    }
   




    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Stubborn Attachments</h3>
                    <h5>$20.00</h5>

                </div>
            </div>
            <form  action="stripe/create-checkout-session" onSubmit={submit}>
                <button type='submit'>
                submit
                </button>
            </form>
        </section>
    );
}