import iconsSprite from '../assets/images/icons-sprite.svg';

interface IconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = (props: IconProps) => {
  return (
    <svg
      width={props.width ?? '120'}
      height={props.height ?? '120'}
      viewBox={props.viewBox ?? '0 0 120 120'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
    </svg>
  );
};
