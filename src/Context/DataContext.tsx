import React from "react";
import useFetch from "../Hooks/useFetch";
import { IDataContext, IVenda } from "../Types/Types";

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa esta em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
