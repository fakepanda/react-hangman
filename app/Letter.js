import React from 'react';
import _ from 'lodash';

/**
 * Clickable letters used for guessing the answer.
 */
class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.revealLetter(this.props.letter);
  }

  render() {
    let className = 'letter';
    if (_.includes(this.props.revealed, this.props.letter)) {
      className += ' revealed';
    }
    return (
      <div className={className} onClick={this.clickHandler}>{this.props.letter}</div>
    );
  }
}

Letter.propTypes = {
  revealLetter: React.PropTypes.func,
  letter: React.PropTypes.string,
  revealed: React.PropTypes.array,
};

export default Letter;
