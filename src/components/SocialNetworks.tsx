import { FlexWrapper } from './FlexWrapper';
import { IconWithCaption } from './IconWithCaption';

interface SocialNetwork {
  iconId: string;
  caption: string;
  link: string;
}

const networks: SocialNetwork[] = [
  {
    iconId: 'telegram',
    caption: 'telegram',
    link: 'https://t.me/aleknemtsev',
  },
  {
    iconId: 'github',
    caption: 'github',
    link: 'https://github.com/AlexNemtsev',
  },
  {
    iconId: 'linkedIn',
    caption: 'linkedin',
    link: 'https://www.linkedin.com/',
  },
];

const ICONSIZES = {
  $web: { width: '37.737px', height: '37.737px' },
};

export const SocialNetworks = () => {
  return (
    <FlexWrapper $rowGap="60px" $columnGap="73px" $justify="center">
      {networks.map((network) => (
        <IconWithCaption
          iconId={network.iconId}
          caption={network.caption}
          key={network.caption}
          viewBox={'0 0 120 120'}
          link={network.link}
          sizes={ICONSIZES}
        />
      ))}
    </FlexWrapper>
  );
};
