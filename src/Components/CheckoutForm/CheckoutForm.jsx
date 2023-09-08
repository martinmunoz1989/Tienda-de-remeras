import { useState } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap';
import '../../styles/styles.css'

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setnombre] = useState('')
    const [telefono, settelefono] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        if(!nombre) {
            setError('Por favor, introduzca su nombre.');
            return;
        }

        if(!telefono.startsWith('11')) {
            setError('El campo del telefono esta incompleto.');
            return;
        }

        if(!email) {
            setError('Por favor, introduzca su email.');
            return;
        }

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <Container>
            <Form onSubmit={handleConfirm}>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        placeholder="Martin Muñoz"
                        onChange={({ target }) => setnombre(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        value={telefono}
                        placeholder="Escriba su número empezando con 11"
                        onChange={({ target }) => settelefono(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Ejemplo: martin@ejemplo.com"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Crear Orden
                </Button>
            </Form>
        </Container>
    );
}

export default CheckoutForm;
