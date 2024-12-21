import { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaArrowRight } from 'react-icons/fa'; // Import icons
import './Chatbot.css'; // Import the CSS

const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [submittedQuestion, setSubmittedQuestion] = useState('');
    const [displayedAnswer, setDisplayedAnswer] = useState('');

    async function generateData() {
        setLoading(true); // Set loading to true when the question is being processed
        try {
            const response = await axios({
                url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCXh3AsCpR0PfVia0y5WD0dZwNE7J3U_Jc',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    contents: [
                        {
                            parts: [{ text: question }],
                        },
                    ],
                },
            });

            const generateAnswer =
                response.data.candidates[0].content.parts[0].text;

            setAnswer(generateAnswer);
            typeAnswer(generateAnswer); // Trigger typing animation
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    const typeAnswer = (text) => {
        setDisplayedAnswer(''); // Reset displayed answer immediately
        setAnswer(text); // Set the full answer immediately

        // Trigger the "typing animation" after a short delay
        setTimeout(() => {
            setDisplayedAnswer(text); // This will make the answer appear after a short delay
        }, 500); // Adjust delay for when animation should start
    };

    const handleSubmit = () => {
        setSubmittedQuestion(question); // Move question to the left corner
        generateData(); // Generate answer
        setQuestion(''); // Clear the input field
    };

    return (
        <Container fluid className="chat-container">
            {/* Answer Box */}
            <Row className="answer-box">
                <Col>
                    <div className="chatbox">
                        <p>
                            <FaUser style={iconStyle} /> {submittedQuestion}{' '}
                            {/* Question with human icon */}
                        </p>
                        {loading ? (
                            <div className="loader"></div> // Loading animation
                        ) : (
                            <p className="answer-text">
                                {displayedAnswer ||
                                    'Your answer will appear here.'}
                            </p>
                        )}
                    </div>
                </Col>
            </Row>

            {/* Question Box */}
            <Row className="question-box">
                <Col>
                    <div className="input-container">
                        <Form.Control
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ask a question..."
                        />
                        <FaArrowRight
                            onClick={handleSubmit}
                            className="question-icon"
                            disabled={loading} // Disable icon while loading
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const iconStyle = {
    marginRight: '10px',
    fontSize: '20px',
    color: '#7289DA',
};

export default Chatbot;
