import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <Container>
            <Form onSubmit={handleConfirm}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear Orden
                </Button>
            </Form>
        </Container>
    );
}



export default CheckoutForm