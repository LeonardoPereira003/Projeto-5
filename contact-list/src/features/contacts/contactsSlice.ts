    import { createSlice, PayloadAction } from '@reduxjs/toolkit'
    import { Contact } from '../../types'

    // Tipagem do estado do Redux
    type ContactsState = {
    items: Contact[]
    }

    // Estado inicial
    const initialState: ContactsState = {
    items: []
    }

    // Criação do slice
    const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        // ADICIONAR contato
        addContact: (state, action: PayloadAction<Contact>) => {
        state.items.push(action.payload)
        },

        // REMOVER contato pelo ID
        removeContact: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(
            contact => contact.id !== action.payload
        )
        },

        // EDITAR contato existente
        editContact: (state, action: PayloadAction<Contact>) => {
        const index = state.items.findIndex(
            contact => contact.id === action.payload.id
        )

        if (index !== -1) {
            state.items[index] = action.payload
        }
        }
    }
    })

    // Exporta as ações
    export const { addContact, removeContact, editContact } =
    contactsSlice.actions

    // Exporta o reducer
    export default contactsSlice.reducer
