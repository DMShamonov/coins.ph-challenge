import * as React from 'react';

/* eslint-disable */

export default function Wallets({
  wallets,
}) {
  return (
    <div className="table">
      <div className="table__header">
        <div className="table__row">
          <div className="table__cell">ID</div>
          <div className="table__cell">Label</div>
          <div className="table__cell" style={{ width: '10%' }}>Balance</div>
        </div>
      </div>
      <div className="table__body">
        {wallets.map(({ id, label, balance }) => (
          <div className="table__row" key={id}>
            <div className="table__cell">{id}</div>
            <div className="table__cell">{label}</div>
            <div className="table__cell" style={{ width: '10%' }}>{balance / 1e8}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
