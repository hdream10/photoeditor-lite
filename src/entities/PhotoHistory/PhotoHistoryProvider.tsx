import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { IPhotoHistoryItem, PhotoHistoryRepository } from "./model";
import { SQLiteClient } from "@/shared/database";

type TPhotoHistoryContextValue = {
  getPhotos: () => Promise<IPhotoHistoryItem[]>;
  addPhoto: (uri: string) => void;
};

type TProps = {
  db: SQLiteClient;
  children: React.ReactNode;
};

const PhotoHistoryContext = createContext<
  TPhotoHistoryContextValue | undefined
>(undefined);

const PhotoHistoryProvider: React.FC<TProps> = ({ db, children }) => {
  const photoHistoryRepository = useMemo(() => {
    return new PhotoHistoryRepository(db);
  }, [db]);

  const getPhotos = useCallback(async () => {
    return photoHistoryRepository.getAll().catch((error) => {
      console.error("[SQLite query error, getPhotos]", error);
    }) as Promise<IPhotoHistoryItem[]>;
  }, [photoHistoryRepository]);

  const addPhoto = useCallback(
    (uri: string) => {
      photoHistoryRepository.add(uri).catch((error) => {
        console.error("[SQLite run, addPhoto]", error);
      });
    },
    [photoHistoryRepository]
  );

  useEffect(() => {
    photoHistoryRepository.init();
  }, [photoHistoryRepository]);

  return (
    <PhotoHistoryContext.Provider value={{ addPhoto, getPhotos }}>
      {children}
    </PhotoHistoryContext.Provider>
  );
};

export const usePhotoHistory = () => {
  const context = useContext(PhotoHistoryContext);

  if (!context) {
    throw new Error("usePhotoHistory must be used within PhotoHistoryProvider");
  }
  return context;
};

export default PhotoHistoryProvider;
