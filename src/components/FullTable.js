import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";
import { getAllPayments, getAllPaymentsAxios, getAllPaymentsFetch, getAllCountriesAxios, getAllPaymentsForCountryAxios } from "../data/DataFunctions";
import { useState, useEffect } from "react";

const FullTable = () => {
  const headers = new Headers({"Accept" : "application/json"})
  const [items,setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    loadCountryData()
  }, [])
  
  useEffect(() => {
    input !== "" && loadData()
  }, [input])

  const loadData = () => {
    getAllPaymentsForCountryAxios(input)
      .then((response) => {
      if (response.status === 200) {
        setItems(response.data)
        setIsLoading(false)
      } else {
        console.log("somethings wrong, response.status")
      }
    })
    .catch((error) => {
      console.log("something went wrong", error)
    })
  }

  const loadCountryData = () => {
    getAllCountriesAxios()
      .then((response) => {
      if (response.status === 200) {
        setUniqueCountries(response.data)
        setIsLoading(false)
        
      } else {
        console.log("somethings wrong, response.status")
      }
    })
    .catch((error) => {
      console.log("something went wrong", error)
    })
  }
  

   return (
    <> 
      {!isLoading && <select
        onChange={(event) => {
          setInput(event.target.value)
        }}
        name="countries"
        className="form-select form-select-sm"
      >
        {input === "" ? <option key={uniqueCountries.length} value="">
          Choose Country
        </option> :
        <option key={uniqueCountries.length} value="" disabled={true}>
        Choose Country
      </option>
        }
        {uniqueCountries.map((eachCountry, index) => {
          return (
            <option key={index} value={eachCountry}>
              {eachCountry}
            </option>
          );
        })}
      </select>}
      <br></br>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <Table striped bordered hover>
        <thead>
          <tr key={items.length}>
            <th>Id</th>
            <th>Date</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items
            .map((item, index) => {
              return (
                <TableItem
                  key={index}
                  id={item.id}
                  date={item.date}
                  country={item.country}
                  currency={item.currency}
                  amount={item.amount}
                />
              );
            })}
        </tbody>
      </Table>}
    </>
  );
};

export default FullTable;
