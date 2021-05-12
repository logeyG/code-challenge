import './App.css';
import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

const Sections = ({ values }) => {
  return (
    <>
      {[values].map((section, idx) => {
        return (
          <span key={idx} className="badge">
            {section}
          </span>
        );
      })}
    </>
  );
};

function App() {

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil");
      setData(result.data.results);
    })();
  }, []);

  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "NY Times Top Science Articles",
        columns: [
          {
            Header: "Title",
            accessor: "title"
          },
          {
            Header: "Byline",
            accessor: "byline"
          },
          {
            Header: "Section",
            accessor: "section",
            Cell: ({ cell: { value } }) => <Sections values={value} />
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;