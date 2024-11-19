import Contact from "../components/Contact";
import "../styles/ContactPage.css"
import { Form, Button, Row, Col } from 'react-bootstrap';


export default function ContactPage(){

    return(
        <div id="ContactPage">
            <div className="kapcsolat">
                <h3>Kapcsolat:</h3>
                <p><strong>Cím: </strong>2363 Felsőpakony, Madách Tér 3/2</p>
                <p><strong>Telefonszám: </strong>+36 30 502 18 35</p>
                <p><strong>Email cím: </strong>soselevator@gmail.com</p>
            </div>
            <div className="ajanlatkeres">
                <div className="ajanlatkeresContainer">
                    <h3>Kapcsolat felvételi űrlap</h3>
                <Form>
                <Row className="mb-3">
                    {/* Név */}
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Teljes név</Form.Label>
                        <Form.Control type="text" placeholder="Adja meg a nevét" required />
                    </Form.Group>

                    {/* Telefonszám */}
                    <Form.Group as={Col} controlId="formPhone">
                        <Form.Label>Telefonszám</Form.Label>
                        <Form.Control type="tel" placeholder="+36 30 123 4567" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* Email cím */}
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Email cím</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" required />
                    </Form.Group>

                    {/* Vállalat neve */}
                    <Form.Group as={Col} controlId="formCompany">
                        <Form.Label>Vállalat neve</Form.Label>
                        <Form.Control type="text" placeholder="Adja meg a cég nevét (opcionális)" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* Érdeklődési terület */}
                    <Form.Group controlId="formInterest">
                        <Form.Label>Érdeklődési terület</Form.Label>
                        <Form.Select required>
                            <option value="">Válassza ki a szolgáltatást</option>
                            <option value="karbantartas">Lift karbantartás</option>
                            <option value="modernizacio">Lift modernizáció</option>
                            <option value="szerviz">Szerviz szolgáltatás</option>
                            <option value="hibaelharitas">Hibaelhárítás</option>
                            <option value="tanacsadas">Tanácsadás</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* Üzenet */}
                    <Form.Group controlId="formMessage">
                        <Form.Label>Üzenet</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Írja le igényeit, preferenciáit, vagy kérdéseit..."
                        />
                    </Form.Group>
                </Row>

                <div className="text-center">
                    <Button variant="primary" type="submit" className="px-4">
                        Ajánlatkérés Küldése
                    </Button>
                </div>
            </Form>
                </div>
            </div>
        </div>
    )
}