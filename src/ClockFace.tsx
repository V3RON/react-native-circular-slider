import type React from "react";
import { G, Text, Line } from "react-native-svg";
import range from "lodash.range";

export type ClockFaceProps = {
  r: number;
  stroke: string;
};

export const ClockFace = ({ r, stroke }: ClockFaceProps): React.JSX.Element => {
  const faceRadius = r - 5;
  const textRadius = r - 26;

  return (
    <G>
      {range(48).map((i) => {
        const cos = Math.cos(((2 * Math.PI) / 48) * i);
        const sin = Math.sin(((2 * Math.PI) / 48) * i);

        return (
          <Line
            key={i}
            stroke={stroke}
            strokeWidth={i % 4 === 0 ? 3 : 1}
            x1={cos * faceRadius}
            y1={sin * faceRadius}
            x2={cos * (faceRadius - 7)}
            y2={sin * (faceRadius - 7)}
          />
        );
      })}
      <G translate={"0, -9"}>
        {range(12).map((h, i) => (
          <Text
            key={i}
            fill={stroke}
            fontSize="16"
            textAnchor="middle"
            x={
              textRadius *
              Math.cos(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6)
            }
            y={
              textRadius *
              Math.sin(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6)
            }
          >
            {h + 1}
          </Text>
        ))}
      </G>
    </G>
  );
};
