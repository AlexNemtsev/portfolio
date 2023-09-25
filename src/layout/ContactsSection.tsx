import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { SectionTitle } from '../components/SectionTitle';

export const ContactsSection = () => {
  return (
    <Container as="section" id="contacts">
      <SectionTitle>Contacts</SectionTitle>
      <Form />
    </Container>
  );
};
