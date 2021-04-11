import React, { useState } from "react";

import Input from '../../components/UI/Input/Input';

import "./ContactUs.scss";



function ContactUs(props) {


    const controls = {
        name: {
            label: "",
            elementType: "text",
            elementConfig: {
                type: "text",
                placeholder: "firstname",
            },
            value: "",
            validation: {
                required: false,
                minLength: 3,
            },

            touched: false,
        },
        lastname: {
            label: "",
            elementType: "text",
            elementConfig: {
                type: "text",
                placeholder: "lastname",
            },
            value: "",
            validation: {
                required: false,
                minLength: 5,
            },

            touched: false,
        },
        email: {
            label: "",
            elementType: "email",
            elementConfig: {
                type: "email",
                placeholder: "email",
            },
            value: "",
            validation: {
                required: true,
                minLength: 5,
            },
            validEmail: false,
            touched: false,
        },
        hidden: {},
        message: {
            label: "",
            elementType: "textarea",
            elementConfig: {
                type: "textarea"
            },
            value: "",
            validation: {
                required: true,
                minLength: 5
            },
            touched: false,
        }
    }

    const [formControls, setFormControls] = useState(controls);

    const isValid = (value, rules, type) => {

        let isValid = true;
        if (!rules) {
            return true;
        }

        if (!rules.isValid && value) {
            if (rules.required) {
                isValid = value.trim() !== "" && isValid;
            }
            if (rules.minLength) {
                isValid = value.length >= rules.minLength;
            }
            if (type === 'email' & rules.required) {
                const pattern = /^([a-zA-Z0-9-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                isValid = pattern.test(value) && isValid;
            }
        } return isValid;

    };
    const inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...formControls,
            [controlName]: {
                ...formControls[controlName],
                value: event.target.value,
                valid: isValid(
                    event.target.value,
                    formControls[controlName].validation,
                    formControls[controlName].elementConfig.type
                ),
                touched: true
            },
        };
        setFormControls(updatedControls);
    };

    const submitHandler = event => {
        event.preventDefault()

        const contactForm = {
            name: formControls.name.value,
            lastname: formControls.lastname.value,
            email: formControls.email.value,
            message: formControls.message.value
        };
        alert(JSON.stringify(contactForm))
    }

    let formElementArray = [];
    for (let key in formControls) {
        formElementArray.push({
            id: key,
            config: formControls[key],
        });
    }

    let formContent = formElementArray.map((formElement) => (
        <div key={formElement.id} className={"input-group " + (formElement.id)} >
            <Input
                inputId={formElement.id}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                touched={formElement.config.touched}
                changed={(event) => inputChangeHandler(event, formElement.id)}
            />

        </div>
    ))

    return (
        <div className="contact-us">
            <div className="desc-contact-us-container">
                <div className="desc-contact-us">
                    <h1>contact us.</h1>
                    <p>Playground srl
                    Via G. Mazzini 3/C,
                Cernusco Sul Naviglio (Milano)<br />
                -<br />
                T +39 0240706003</p>
                </div>

            </div>
            <div className="contact-us-wrapper">

                <form className="contact-us-form" onSubmit={submitHandler}>
                    {formContent}
                    <button type="submit" class="button">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
