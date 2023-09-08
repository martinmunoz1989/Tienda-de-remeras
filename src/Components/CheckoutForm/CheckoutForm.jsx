import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setnombre] = useState('')
    const [telefono, settelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <Container>
            <Form onSubmit={handleConfirm}>
                <Form.Group classnombre="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={({ target }) => setnombre(target.value)}
                    />
                </Form.Group>

                <Form.Group classnombre="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        value={telefono}
                        onChange={({ target }) => settelefono(target.value)}
                    />
                </Form.Group>

                <Form.Group classnombre="mb-3">
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