import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import { getAllPayments } from "../data/DataFunctions";
import { useState } from "react";

const FullTable = () => {
  const items = getAllPayments();

  const countries = items.map((item, index) => {
    return item.country;
  });

  const uniqueCountries = countries.filter(
    (country, index) => countries.indexOf(country) === index
  );

  const [input, setInput] = useState("");
  return (
    <>
      <select
        onChange={(event) => setInput(event.target.value)}
        name="countries"
        className="form-select form-select-sm"
      >
        <option key={uniqueCountries.length} value="">
          Choose Country
        </option>
        {uniqueCountries.map((eachCountry, index) => {
          return (
            <option key={index} value={eachCountry}>
              {eachCountry}
            </option>
          );
        })}
      </select>
      <br></br>
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
