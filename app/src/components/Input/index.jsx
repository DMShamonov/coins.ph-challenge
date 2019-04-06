// @flow

import * as React from 'react';
import _uniqueId from 'lodash/uniqueId';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

export default function Input({
  id,
  type = 'text',
  name,
  label,
  placeholder,
  value,
  defaultValue,
  autoFocus,
  autoComplete = 'on',
  required,
  disabled,
  className,
  onChange,
}: PropsType): React.Node {
  const _id = id || name || _uniqueId();

  return (
    <div className={classnames('input', className)}>
      <label htmlFor={_id}>
        <span className="input__label">{label}</span>
        <input
          id={_id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          required={required}
          disabled={disabled}
          className="input__field"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
