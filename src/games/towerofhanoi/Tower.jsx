import React from 'react';
import { arrayOf, number, func, string, bool } from 'prop-types';
import { Block, TowerList } from './styledElements';

const Tower = ({ blocks, onTowerClick, towerId, isSelected }) => (
  <TowerList onClick={onTowerClick} data-tower={towerId}>
    {blocks.reduceRight((acc, block, i) => {
      acc.push(
        <Block key={block} width={block} isHighlighted={isSelected && i === blocks.length - 1}>
          {block}
        </Block>,
      );
      return acc;
    }, [])}
  </TowerList>
);

Tower.propTypes = {
  blocks: arrayOf(number).isRequired,
  onTowerClick: func.isRequired,
  towerId: string.isRequired,
  isSelected: bool.isRequired,
};

export default Tower;
