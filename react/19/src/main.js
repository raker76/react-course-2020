import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import _ from "lodash";

function SortableTable({ data }) {
  const [localData, setLocalData] = useState(_.tail(data));
  const [asc, setAsc] = useState(false);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(-1);

  function sort(colIndex) {
    if (selectedColumnIndex === colIndex) {
      doSort(colIndex, !asc);
      setAsc(!asc);
    } else {
      doSort(colIndex, true);
      setSelectedColumnIndex(colIndex);
      setAsc(true);
    }
  }

  function doSort(colIndex, asc) {
    const sortedData = localData.sort(function (a, b) {
      if (a[colIndex] > b[colIndex]) return asc ? -1 : 1;
      if (a[colIndex] < b[colIndex]) return asc ? 1 : -1;
      return 0;
    });

    setLocalData([...sortedData]);
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            {_.head(data).map((h, i) => (
              <th key={h} onClick={() => sort(i)}>
                {h}
              </th>
            ))}
          </tr>
          {localData.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const App = () => {
  const data = [
    ["id", "Name", "Country", "Email"],
    [0, "dan", "Israel", "dan@gmail.com"],
    [1, "dana", "Israel", "dana@gmail.com"],
    [2, "anna", "Izrael", "anna@gmail.com"],
    [3, "zina", "UK", "zina@gmail.com"],
  ];

  return (
    <div>
      <SortableTable data={data} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
