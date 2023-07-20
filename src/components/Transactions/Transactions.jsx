import React from 'react'

const TransactionHistory = ({items}) => {
    return (
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amont, currency }) => (
            <tr key={id}>
              <td >{type}</td>
              <td >{amont}</td>
              <td >{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default TransactionHistory;