import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    return (
        <div>
            <footer id="footer">
                <section>
                    <h2>Gerell Troche</h2>
                    <dl className="alt">
                        <dt>Phone</dt>
                        <dd><a href="tel:4077157028">407.715.7028</a></dd>
                        <dt>Email</dt>
                        <dd><a href="mailto:tgtroche@gmail.com">tgtroche@gmail.com</a></dd>
                    </dl>
                    <ul className="icons">
                        <li><a href={'#'} ><FontAwesomeIcon icon={faGithub} /></a>
                        </li>
                        <li><a href={'#'} ><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}

export default Contact;