import { PhotoHistoryProvider } from "@/entities/PhotoHistory";
import { SQLiteClient } from "@/shared/database";
import { useMemo } from "react";

type TProps = {
  databaseName: string;
  children: React.ReactNode;
};

const SQLConnectorProvider: React.FC<TProps> = ({ databaseName, children }) => {
  const db = useMemo(() => {
    return new SQLiteClient(databaseName);
  }, [databaseName]);

  return <PhotoHistoryProvider db={db}>{children}</PhotoHistoryProvider>;
};

export default SQLConnectorProvider;
