import { TState } from "../@Model";
import { TDependencies, TPhoto } from "../types";

type TProps = {
  onTakePhoto: () => Promise<TPhoto>;
};

const resolveTakePhoto = ({}: TDependencies, state: TState) => {
  return ({ onTakePhoto }: TProps) => {
    state.startTakePhoto();

    onTakePhoto()
      .then((photo) => {
        state.setPhotoSrc(photo.uri);
        state.setTakePhotoSuccess();
      })
      .catch(() => {
        state.setTakePhotoFailed();
      });
  };
};

export default resolveTakePhoto;
