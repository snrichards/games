import React, { Component } from 'react';
import Tower from './Tower';
import { getInitialGameState, isValidMove, getLastItem } from './towerOfHanoi';
import { Towers, Li } from './styledElements';

class TowerOfHanoi extends Component {
  state = getInitialGameState();

  onTowerClick = (e) => {
    const { currentSelectedTower: fromTower } = this.state;

    // No tower currently selected
    if (!fromTower) {
      const towerName = e.target.getAttribute('data-tower');
      const { [towerName]: clickedTower } = this.state;

      // Clicked tower has blocks, set top block as selected
      if (clickedTower.length) {
        this.setState({ currentSelectedTower: e.target.getAttribute('data-tower') });
      }

      return;
    }

    const toTower = e.target.getAttribute('data-tower');

    // Clicked tower is already selected, deselect tower
    if (fromTower === toTower) {
      this.setState({ currentSelectedTower: null });
      return;
    }

    const { [fromTower]: fromTowerBlocks, [toTower]: toTowerBlocks, numMoves } = this.state;

    if (isValidMove(fromTowerBlocks, toTowerBlocks)) {
      this.setState(
        {
          [toTower]: [...toTowerBlocks, getLastItem(fromTowerBlocks)],
          [fromTower]: fromTowerBlocks.slice(0, fromTowerBlocks.length - 1),
          numMoves: numMoves + 1,
        },
        this.checkForWin,
      );
    }
    // TODO: show error if invalid move

    // deselect tower after a move has been made
    this.setState({ currentSelectedTower: null });
  };

  checkForWin = () => {
    const { tower1, tower2, tower3, numMoves } = this.state;

    if (tower3.length === 3) {
      alert('you win!');
      window.localStorage.removeItem('towers');
      this.setState(getInitialGameState());
    } else {
      // save to local storage after each move
      window.localStorage.setItem(
        'towers',
        JSON.stringify({
          tower1,
          tower2,
          tower3,
          numMoves,
        }),
      );
    }
  };

  render() {
    const { tower1, tower2, tower3, numMoves, currentSelectedTower } = this.state;
    return (
      <section>
        <h1>Tower Of Hanoi</h1>
        <p>{numMoves}</p>
        <Towers>
          {[tower1, tower2, tower3].map((currTower, i) => {
            const towerName = `tower${i + 1}`;
            return (
              <Li key={towerName}>
                <Tower
                  blocks={currTower}
                  isSelected={currentSelectedTower === towerName}
                  onTowerClick={this.onTowerClick}
                  towerId={towerName}
                />
              </Li>
            );
          })}
        </Towers>
        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem('towers');
            this.setState(getInitialGameState());
          }}
        >
          reset
        </button>
      </section>
    );
  }
}

export default TowerOfHanoi;
