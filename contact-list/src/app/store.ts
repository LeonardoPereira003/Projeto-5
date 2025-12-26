    import { configureStore } from '@reduxjs/toolkit'
    import contactsReducer from '../features/contacts/contactsSlice'

    // Criação do store global do Redux
    export const store = configureStore({
    reducer: {
        // Nome do estado global: contacts
        contacts: contactsReducer
    }
    })

    // Tipos auxiliares para TypeScript
    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch
