import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import axios from '../axios'

export default function Table(user) {

  const [data, setData] = useState([]);
  const[error, setError] = useState([]);
  const[errorMsg, setErrorMsg] = useState([]);
  const reservations=[];
  const columns = [
    { title: "מספר שולחן", field: "tableNum",  editable: 'never' },
    { title: "מס׳ סועדים", field: "capacity" },
    { title: "תאריך", field: "date" },
    { title: "שעה", field: "hour" },

  ];
  const operation = {


    type: "showPreviousReservations",
    item:
    {
      itemId: {
        space: "default",
        id: "default"
      }
    },
    invokedBy:
    {
      userId: {
        space: user.user.user.userId.space,
        email: user.user.user.userId.email
      }
    },
    operationAttributes: {}


  }
  const dataJson = JSON.stringify(operation);

  useEffect(async() => {
     await fetch("http://localhost:8041/twins/operations", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: dataJson,
    }).then(
      (response) => {

        if (response.status === 200) {
          response.json().then((d) => {

            // console.log("200ok");
           
            d.operationAttributes.previousReservations.map(reservation => {
              reservations.push( {
                tableNum: reservation.name.split('-')[0],
                capacity: reservation.itemAttributes.numOfPeople,
                hour: reservation.name.split('-')[1]+':00'+'-'+reservation.name.split('-')[2]+':00',
                date: reservation.name.split('-')[3]+'-'+reservation.name.split('-')[4]
                             
              });
              
            });
            // console.log(reservations);
            setData(reservations);


          });
        } else {
          response.json().then((x) => {
              setError(true);
              setErrorMsg('There are no reservations');
          });
        }
      },

    );
  },[]);

  const handleDeleteReservation =(tableNum, time) => {
    console.log(tableNum)
    console.log(time)
    const operation = {
      type: "cancelReservation",
      item:
      {
        itemId: {
          space: "default",
          id: "default"
        }
      },
      invokedBy:
      {
        userId: {
          space: user.user.user.userId.space,
          email: user.user.user.userId.email
        }
      },
      operationAttributes: {
        option: "123",
        time: time, 
        tableNum: tableNum
      }
    }
    axios.post("operations", operation)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        setError(true);
        setErrorMsg(error.response.data.message);
      });
  }

  const handleChangeReservationDetails=(tableNum, capacity, newTime, oldTime) =>{
    const operation = {
      type: "changeReservationDetails",
      item:
      {
        itemId: {
          space: "default",
          id: "default"
        }
      },
      invokedBy:
      {
        userId: {
          space: user.user.user.userId.space,
          email: user.user.user.userId.email
        }
      },
      operationAttributes: {
        capacity: capacity,
        newTime: newTime, 
        oldTime: oldTime,
        tableNum: tableNum
      }
    }
    axios.post("operations", operation)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      setError(true);
      setErrorMsg(error.response.data.message);
    });

  }
  let errorHandle = null
  if (error === true) {
    errorHandle = (
      <div className="alert alert-danger alert-sm">
        <span className="fw-semi-bold">Error:</span> {errorMsg}.
      </div>);
  }
 
  return (
    <div>
      {errorHandle}
      <MaterialTable
        title=" "
        style={{ direction: 'rtl', position: 'absolute', width: '900px',maxHeight: '400px', scrollBehavior: 'smooth', overflowY: 'scroll'}}
        data={data}
        columns={columns}
        options={{ search: false, paging: false }}
        editable={{

          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            console.log(selectedRow)
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              handleDeleteReservation(selectedRow.tableNum, selectedRow.hour.split(':')[0]+'-'+(parseInt(selectedRow.hour.split(':')[0])+2).toString()+'-'+selectedRow.date)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data]
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setData(updatedRows)
              handleChangeReservationDetails(
                updatedRow.tableNum, 
                updatedRow.capacity, 
                updatedRow.hour.split(':')[0]+'-'+(parseInt(updatedRow.hour.split(':')[0])+2).toString()+'-'+updatedRow.date,
                oldRow.hour.split(':')[0]+'-'+(parseInt(oldRow.hour.split(':')[0])+2).toString()+'-'+oldRow.date)
              resolve()
            }, 2000)
          })
        }} />
    </div>
  );
}

