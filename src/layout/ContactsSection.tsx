import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { SectionTitle } from '../components/SectionTitle';

export const ContactsSection = () => {
  return (
    <Container as="section" id="contacts">
      <SectionTitle $margin="140px 0 50px">Contacts</SectionTitle>
      <Form />
    </Container>
  );
};
