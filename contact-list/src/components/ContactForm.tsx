    import styled from 'styled-components'
    import { useDispatch } from 'react-redux'
    import { useState } from 'react'
    import { addContact } from '../features/contacts/contactsSlice'
    import { Contact } from '../types'

    const Card = styled.form`
    background: ${({ theme }) => theme.colors.surface};
    padding: 24px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 24px;
    `

    const Field = styled.input`
    width: 100%;
    padding: 14px;
    margin-bottom: 12px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: #0f0f1a;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }
    `

    const Button = styled.button`
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.danger}
    );

    color: white;
    `

    export function ContactForm(): JSX.Element {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !email || !phone) return

        const contact: Contact = {
        id: Date.now(),
        name,
        email,
        phone
        }

        dispatch(addContact(contact))

        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <Card onSubmit={handleSubmit}>
        <Field
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Field
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Field
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit">Adicionar contato</Button>
        </Card>
    )
    }
