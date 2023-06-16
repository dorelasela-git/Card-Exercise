import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();
    const handleEvent = () => {
        navigate("/home");
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Contact</h2>
            <p style={{ textAlign: "justify", margin: "0 20px 20px 20px" }}>
                We highly value your feedback and strive to continuously improve our
                products and services. We believe that your insights and suggestions
                play a vital role in shaping our offerings to better meet your needs. We
                encourage you to share your thoughts and opinions with us through our
                feedback channels.
                <br />
                <br />
                One simple and convenient way to provide feedback is by clicking the
                "Give Feedback" button below. By clicking this button, you will be
                directed to a dedicated feedback form where you can express your
                thoughts, share ideas, report issues, or offer suggestions for
                improvement. Your feedback can cover various aspects, including our
                products, customer service, website experience, or any other areas you
                wish to address.
                <br />
                <br />
                We genuinely appreciate your input, as it helps us understand what we're
                doing right and identify areas where we can make enhancements. Your
                feedback enables us to create a better experience for you and all our
                valued customers.
                <br />
                <br />
                Remember, your feedback matters! By sharing your experiences, ideas, and
                suggestions, you contribute to the ongoing growth and development of our
                company. We are committed to actively listening and taking action based
                on your valuable feedback.
                <br />
                <br />
                Thank you for being a part of our journey, and we look forward to
                hearing from you soon. Together, let's make a difference and shape a
                better future for our products and services.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button style={{ margin: "0 auto" }} onClick={handleEvent}>
                    <a href="https://chilipepper.io/form/spicy-darkbrown-pepperoncinis-34ff41c4-d45a-456b-8c08-4f11401ce22a">Click here</a>
                </button>
            </div>
        </div>
    );
};

export default Contact;
