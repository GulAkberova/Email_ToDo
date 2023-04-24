import { createContext, useState } from "react";

export const inputContext = createContext(null);

export const InputProvider = ({ children }) => {
  const [name, setName] = useState(" ");
  const [template, setTemplate] = useState(" ");
  const [to, setTo] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [check, setCheck] = useState(false);
  const [allEmail, setAllEmail] = useState([]);
  const values = {
    name,
    setName,
    template,
    setTemplate,
    to,
    setTo,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    check,
    setCheck,
    allEmail,
    setAllEmail,
  };

  return (
    <inputContext.Provider value={values}>{children}</inputContext.Provider>
  );
};
