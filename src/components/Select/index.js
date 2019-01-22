import React, {Component} from 'react';
import {KeyboardArrowDown} from '@material-ui/icons'
import styles from './Select.module.css';

class Select extends Component {

  state = {
    isListVisible: false
  };

  toggleSelectList = () => {
    const {isListVisible} = this.state;
    this.setState({
      isListVisible: !isListVisible
    })
  };

  renderOption = options => (
    options.map((option, key) => (
      <li
        key={key}
        onClick={
          () => this.props.selectItem(
            option,
            key + 1,
            this.toggleSelectList
          )
        }
        className={styles.selectListItem}
      >
        {option}
      </li>
    ))
  );

  render() {
    const {
      options,
      placeholder,
      onChange,
      value,
      name,
    } = this.props;

    const {isListVisible} = this.state;

    return (
      <div>
        <div className={styles.selectWrapper}>
          <input
            className={styles.select}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            name={name}
          />
          <KeyboardArrowDown
            nativeColor='#bbb'
            onClick={this.toggleSelectList}
          />
        </div>
        {
          isListVisible && (
            <ul className={styles.selectList}>
              {this.renderOption(options)}
            </ul>
          )
        }
      </div>
    );
  }
}

export default Select;
