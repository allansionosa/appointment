import "./App.css";
import Header from "./components/Header";
import AppointmentList from "./components/AppointmentList";

import React, { useCallback, useEffect, useState } from "react";
import AddAppointment from "./components/AddAppointment";
const clearData = {
  ownerName: "",
  petName: "",
  aptDate: "",
  aptTime: "",
  aptNotes: "",
};
function App() {
  const [formValue, setFormValue] = useState(clearData);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(e.target.form);
  };

  const [infoData, setAppointmentList] = useState([]);
  const fetchData = () => {
    fetch("./src/data.json")
      .then((res) => res.json())
      .then((json) => {
        setAppointmentList(json);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <AddAppointment
        onSubmit={(e) => {
          const appointmentInfo = {
            ownerName: formValue.ownerName,
            petName: formValue.petName,
            aptDate: `${formValue.aptDate} ${formValue.aptTime}`,
            aptNotes: formValue.aptNotes,
          };
          e.preventDefault();
          setAppointmentList([...infoData, appointmentInfo]);
          setFormValue(clearData);
          console.log(appointmentInfo);
        }}
        formValue={formValue}
        handleInput={handleInput}
      />
      <AppointmentList data={infoData} />
    </div>
  );
}

export default App;
