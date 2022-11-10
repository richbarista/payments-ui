import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';

const FullTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Country</th>
          <th>Currency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <TableItem id="101" date="2017-01-31" country="USA" currency="USD" amount="160" />
        <TableItem id="102" date="2016-01-22" country="FRA" currency="EUR" amount="160" />
        <TableItem id="103" date="2019-07-07" country="SWE" currency="EUR" amount="160" />
        <TableItem id="104" date="2020-04-21" country="USA" currency="USD" amount="160" />
        <TableItem id="105" date="2017-05-14" country="USA" currency="USD" amount="160" />
      </tbody>
    </Table>
  );
}

export default FullTable;