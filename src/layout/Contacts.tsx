import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { SectionTitle } from '../components/SectionTitle';

export const Contacts = () => {
  return (
    <Container as="section" id="contacts">
      <SectionTitle $margin="0 0 50px">Contacts</SectionTitle>
      <Form />
    </Container>
  );
};
