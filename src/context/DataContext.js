import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();
const DataContext = ({ children }) => {
  // const [isBookmark, setIsBookMark] = useState();
  const [sorting, setSorting] = useState("latest");
  const [data, setData] = useState([]);

  return (
    <Context.Provider value={{ sorting, setSorting, data, setData }}>
      {children}
    </Context.Provider>
  );
};
export default DataContext;
// export default useDataContext = () => useContext(Context);
