import React from "react";
import { DATA } from "../utils/DATA";
import { useState } from "react";
import { filterData } from "../utils/filter";
import { Droppable, Draggable } from "react-beautiful-dnd";

const LawyerTable = () => {
  const [LawData, setLawData] = useState(DATA);
  const [filteredData, setFilteredData] = useState(LawData);
  const [searchText, setSearchText] = useState("");
  console.log(LawData);

  return (
    <div className="lawyer">
      <div className="search">
        <input
          className="search-box"
          value={searchText}
          onChange={(box) => {
            setSearchText(box.target.value);
          }}
        />
        {console.log(searchText)}
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchText, LawData);
            setFilteredData(filteredData);
          }}
        >
          Search
        </button>
        {/* <select name="searchBy" className="searchList">
          <option value="o">Name</option>{" "}
          <option value="option 2">Speciality</option>
        </select> */}
      </div>
      <table className="table_wrapper">
        <Droppable droppableId="lawyers">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              <tr className="headRow">
                <th>Name</th>
                <th>Speciality</th>
                <th>Phone</th>
              </tr>
              {filteredData.map((data, index) => {
                return (
                  <Draggable
                    key={data.key}
                    draggableId={data.key}
                    index={index}
                  >
                    {(provided) => (
                      <tr
                        className="row"
                        {...provided.draggableProps} {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <td>{data.name}</td>
                        <td>{data.speciality}</td>
                        <td>{data.phone}</td>
                      </tr>
                    )}
                  </Draggable>
                );
              })}
            </tbody>
          )}
        </Droppable>
      </table>
    </div>
  );
};

export default LawyerTable;
