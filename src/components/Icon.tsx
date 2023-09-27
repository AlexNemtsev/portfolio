import iconsSprite from '../assets/images/icons-sprite.svg';

interface IconProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

// width и height задают отображаемый размер svg
// viewbox задаёт отображаемую область svg во viewport
// первые два числа - координаты левого верхнего угла
// вторые два числа - размер svg, отображаемого во viewport.
// Например, если размер svg 120x120, то viewbox с размером 120х120
// отобразит всю картинку, а viewbox 60x60 – только её четверть.
// viewport, по сути, является рамкой, через которую отображается svg
// TODO: добавить возможность принимать размеры для мобилок через пропсы
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
