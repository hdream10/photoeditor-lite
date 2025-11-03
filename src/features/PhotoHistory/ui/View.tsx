import { Loader } from "@/shared/ui";
import { PhotoHistoryList, EmptyState } from "./components";
import { usePhotoHistoryList } from "../hooks";

const View = () => {
  const { photos, isLoading } = usePhotoHistoryList();

  if (isLoading) {
    return <Loader message="Загрузка фото..." />;
  }

  if (photos.length === 0) {
    return <EmptyState />;
  }

  return <PhotoHistoryList photos={photos} />;
};

export default View;

