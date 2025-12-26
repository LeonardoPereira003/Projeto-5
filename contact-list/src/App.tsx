  import styled from 'styled-components'
  import { ContactForm } from './components/ContactForm'
  import { ContactList } from './components/ContactList'

  const Wrapper = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 24px;
  `

  const Container = styled.div`
    width: 100%;
    max-width: 420px;
  `

  const Title = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;
  `

  export function App(): JSX.Element {
    return (
      <Wrapper>
        <Container>
          <Title>Lista de Contatos</Title>
          <ContactForm />
          <ContactList />
        </Container>
      </Wrapper>
    )
  }
