import { Container } from '../components/Container';
import { FooterMenu } from '../components/FooterMenu';
import { SocialNetworks } from '../components/SocialNetworks';

export const Footer = () => {
  return (
    <Container as="footer">
      <SocialNetworks />
      <FooterMenu />
    </Container>
  );
};
