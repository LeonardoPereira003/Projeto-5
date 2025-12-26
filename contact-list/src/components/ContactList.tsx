    import styled from 'styled-components'
    import { useSelector, useDispatch } from 'react-redux'
    import { RootState } from '../app/store'
    import { removeContact } from '../features/contacts/contactsSlice'

    const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    `

    const Item = styled.li`
    background: ${({ theme }) => theme.colors.surface};
    padding: 16px;
    border-radius: 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    strong {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
    }

    p {
        color: ${({ theme }) => theme.colors.muted};
        font-size: 14px;
        margin-top: 4px;
    }
    `

    const RemoveButton = styled.button`
    margin-top: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    background: ${({ theme }) => theme.colors.danger};
    color: white;
    `

    export function ContactList() {
    const contacts = useSelector(
        (state: RootState) => state.contacts.items
    )

    const dispatch = useDispatch()

    if (contacts.length === 0) {
        return <p style={{ opacity: 0.6 }}>Nenhum contato cadastrado</p>
    }

    return (
        <List>
        {contacts.map((contact) => (
            <Item key={contact.id}>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>

            <RemoveButton
                onClick={() => dispatch(removeContact(contact.id))}
            >
                Remover
            </RemoveButton>
            </Item>
        ))}
        </List>
    )
    }
