import React, {
  PropTypes
}
from 'react';
import classNames from 'classnames/bind';
import TopicTextInput from '../components/TopicTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to SearchBarsTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move SearchBarsTextInput up to EntryBox so it's less confusing
const TopicEntryBox = ({
  onEntryChange,
  onEntrySave,
  topic
}) => {
  return (
    <div className={cx('entrybox')}>
      <h1 className={cx('header')}>Vote for your top hack idea</h1>
      <TopicTextInput
        className={cx('input')}
        value={topic}
        placeholder="Suggest a hackday idea"
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave} />
    </div>
  );
};

TopicEntryBox.propTypes = {
  topic: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

export default TopicEntryBox;
