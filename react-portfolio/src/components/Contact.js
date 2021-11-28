import React from "react";

function Contact() {
    return (
        <form>
            <div>
                <p>
                    Contact me <br />
                    Name: Kevin Huynh <br />
                    Email: xkevinhuynhx@gmail.com
                </p>
            </div>

            <input type="text" placeholder="Name" name="name"></input>
            <input type="text" placeholder="Email" name="email"></input>
            <input type="submit"></input>
        </form>

    )
}

export default Contact;