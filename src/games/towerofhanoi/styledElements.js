import styled from 'react-emotion';
import { Ul } from '../common/styledElements';

export const Block = styled('li')(({ width, isHighlighted }) => ({
  'background-color': isHighlighted ? 'yellow' : 'green',
  border: '1px black solid',
  'border-bottom': 0,
  'box-sizing': 'border-box',
  height: '25px',
  'line-height': 'calc(25 / 16)',
  'pointer-events': 'none',
  'text-align': 'center',
  'user-select': 'none',
  width: `${25 * width}px`,
}));

export const Li = styled('li')`
  height: 100%;
  width: calc(100% / 3);
  background-image: linear-gradient(brown, brown);
  background-size: 10px 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TowerList = styled(Ul)`
  align-items: center;
  border-bottom: 2px black solid;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

export const Towers = styled(Ul)`
  display: flex;
  height: 200px;
  justify-content: center;
  width: 500px;
`;
