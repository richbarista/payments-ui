const TableItem = (props) => {
  return (
    <tr key={props.key}>
      <td>{props.id}</td>
      <td>{props.date}</td>
      <td>{props.country}</td>
      <td>{props.currency}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default TableItem;
