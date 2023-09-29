import styled, { css } from 'styled-components';
import iconsSprite from '../assets/images/icons-sprite.svg';

export interface IconProps {
  iconId: string;
  viewBox: string;
  sizes: StyledSVGProps;
  link?: string;
}

interface StyledSVGProps {
  $web: {
    width: string;
    height: string;
  };
  $mobile?: {
    width: string;
    height: string;
  };
}

// width и height задают отображаемый размер svg
// viewbox задаёт отображаемую область svg во viewport
// первые два числа - координаты левого верхнего угла
// вторые два числа - размер svg, отображаемого во viewport.
// Например, если размер svg 120x120, то viewbox с размером 120х120
// отобразит всю картинку, а viewbox 60x60 – только её четверть.
// viewport, по сути, является рамкой, через которую отображается svg
// http://css.yoksel.ru/svg-sizes/#coordinates
export const Icon = (props: IconProps) => {
  if (props.link)
    return (
      <a href={props.link}>
        <StyledIcon {...props} />
      </a>
    );

  return <StyledIcon {...props} />;
};

export const StyledIcon = (props: Omit<IconProps, 'link'>) => {
  return (
    <StyledViewPort {...props.sizes} viewBox={props.viewBox}>
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
    </StyledViewPort>
  );
};

const StyledViewPort = styled.svg<StyledSVGProps>`
  width: ${(props) => props.$web.width};
  height: ${(props) => props.$web.height};

  ${(props) =>
    props.$mobile &&
    css`
      @media screen and (max-width: 420px) {
        width: ${props.$mobile.width};
        height: ${props.$mobile.height};
      }
    `}
`;
