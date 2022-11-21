import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import { getAllPayments } from "../data/DataFunctions";
import { useState } from "react";

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>;

const FullTable = () => {
  const items = getAllPayments();
  console.log(items);

  const [input, setInput] = useState("");
  return (
    <>
      <select
        onChange={(event) => setInput(event.target.value)}
        name="countries"
      >
        <option value="">Choose Country</option>
        {items
          .filter((item, index) => items.indexOf(item) === index)
          .map((item) => {
            return <option value={item.country}>{item.country}</option>;
          })}
      </select>
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
          {items
            .filter((item, index) => {
              if (input === "") {
                return item;
              } else if (item.country === input) {
                return item;
              }
            })
            .map((item, index) => {
              return (
                <TableItem
                  key={item.index}
                  id={item.id}
                  date={item.date}
                  country={item.country}
                  currency={item.currency}
                  amount={item.amount}
                />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default FullTable;
