import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

export default function Table(user) {
  const email = user.user.user.userId.email;
  const space = user.user.user.userId.space;

  const [data, setData] = useState([]);
  const [tables, setTable] = useState([]);
  const [isFirstTime, setFirstTime] = useState(false);
  const columns = [
    { title: "מספר שולחן", field: "name", editable: "never" },
    { title: "מקס׳ סועדים", field: "capacity" },
    { title: "מס׳ מזהה", field: "id", editable: "never" },
    { title: "מרחב", field: "space", editable: "never" },
  ];

  useEffect(async () => {
    if (!isFirstTime) {
      console.log("in first");
      await fetch(
        "http://localhost:8041/twins/items/" + space + "/" + email
      ).then((response) => {
        if (response.status === 200) {
          console.log("in 200 ok");
          response.json().then((d) => {
            const item = d;
            setTable(d);
            var tempTable = [];
            console.log(tables);
            for (var i = 0; i < d.length; i++) {
              tempTable.push({
                name: d[i].name,
                capacity: d[i].itemAttributes.capacity,
                id: d[i].itemId.id,
                space: d[i].itemId.space,
              });
            }
            console.log(tempTable);
            setTable(tempTable);
            setData(tempTable);
          });
        } else {
          response.json().then((x) => {});
        }
      });
      setFirstTime(true);
    }
    console.log(tables);
  });

  const handleUpdateClick = async (newData) => {
    console.log(newData.id);

    var index = tables.findIndex((table) => table.id === newData.id);
    console.log(index);

    console.log(tables[index]);
    const item = {
      itemId: {
        space: tables[index].space,
        id: tables[index].id,
      },
      type: "Table",
      name: tables[index].name,
      active: false,
      createdTimestamp: "",
      createdBy: {
        userId: {
          space: space,
          email: email,
        },
      },
      location: {
        lat: "",
        lng: "",
      },
      itemAttributes: {
        capacity: newData.capacity,
      },
    };
    console.log(item);

    const dataJson = JSON.stringify(item);

    await fetch(
      "http://localhost:8041/twins/items/" +
        space +
        "/" +
        email +
        "/" +
        tables[index].space +
        "/" +
        tables[index].id,
      {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: dataJson,
      }
    ).then(
      (response) => {
        if (response.status === 200) {
          console.log("200 ok");
          tables[index].capacity = newData.capacity;
          setData(tables);
          /*  response.json().then((d) => {
            console.log("200 ok");
            console.log(d);
          });*/
        } else {
          response.json().then((x) => {
            console.log(x);
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <MaterialTable
        title=" "
        style={{
          direction: "rtl",
          position: "absolute",
          width: "900px",
          maxHeight: "400px",
          scrollBehavior: "smooth",
          overflowY: "scroll",
        }}
        data={data}
        columns={columns}
        options={{ search: false, paging: false }}
        editable={{
          onRowUpdate: (updatedRow, oldRow) => handleUpdateClick(updatedRow),
        }}
      />
    </div>
  );
}
