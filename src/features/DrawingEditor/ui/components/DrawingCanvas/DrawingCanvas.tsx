import {
  View as ViewRN,
  PanResponder,
  GestureResponderEvent,
} from "react-native";
import { useMemo } from "react";
import { Svg, Path } from "react-native-svg";
import { Image as ImageComponent } from "@/shared/ui";
import type { TPoint, TPath } from "../../../hooks";
import { styles } from "./DrawingCanvas.styles";

type TProps = {
  photoSrc: string;
  paths: TPath[];
  currentPath: TPath | null;
  onStartDrawing: (point: TPoint) => void;
  onContinueDrawing: (point: TPoint) => void;
  onStopDrawing: () => void;
};

const DrawingCanvas: React.FC<TProps> = ({
  photoSrc,
  paths,
  currentPath,
  onStartDrawing,
  onContinueDrawing,
  onStopDrawing,
}) => {
  const getPointFromEvent = (event: GestureResponderEvent): TPoint => {
    const { locationX, locationY } = event.nativeEvent;
    return { x: locationX, y: locationY };
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (event) => {
          onStartDrawing(getPointFromEvent(event));
        },
        onPanResponderMove: (event) => {
          onContinueDrawing(getPointFromEvent(event));
        },
        onPanResponderRelease: () => {
          onStopDrawing();
        },
        onPanResponderTerminate: () => {
          onStopDrawing();
        },
      }),
    [onStartDrawing, onContinueDrawing, onStopDrawing]
  );

  const pathToSvgPath = (path: TPath): string => {
    if (path.points.length === 0) return "";
    if (path.points.length === 1) {
      const point = path.points[0];
      return `M ${point.x} ${point.y} L ${point.x} ${point.y}`;
    }

    let svgPath = `M ${path.points[0].x} ${path.points[0].y}`;
    for (let i = 1; i < path.points.length; i++) {
      svgPath += ` L ${path.points[i].x} ${path.points[i].y}`;
    }
    return svgPath;
  };

  const allPaths = currentPath ? [...paths, currentPath] : paths;

  return (
    <ViewRN style={styles.container} {...panResponder.panHandlers}>
      <ImageComponent source={{ uri: photoSrc }} style={styles.image} />
      <Svg style={styles.svg} width="100%" height="100%">
        {allPaths.map((path, index) => (
          <Path
            key={index}
            d={pathToSvgPath(path)}
            stroke={path.color}
            strokeWidth={path.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ))}
      </Svg>
    </ViewRN>
  );
};

export default DrawingCanvas;
