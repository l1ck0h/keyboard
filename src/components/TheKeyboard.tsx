import { range } from "ramda";
import BaseKey from "./BaseKey";
import { useKeyboard } from "../hooks";

const midiNotes = range(21, 109);
const isBlackKey = (midiNote: number) => {
  switch ((midiNote - 20) % 12) {
    case 0:
    case 2:
    case 5:
    case 7:
    case 10:
      return true;
    default:
      return false;
  }
};

function TheKeyboard() {
  const { pressKey, releaseKey } = useKeyboard();

  return (
    <div
      className="the-keyboard"
      onPointerDown={pressKey}
      onPointerUp={releaseKey}
    >
      <div className="Keyboard app-util-width:100%">
        {midiNotes.map((midiNote: number, i: number) => {
          return (
            <BaseKey
              key={i}
              midiNote={midiNote}
              isBlackKey={isBlackKey(midiNote)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TheKeyboard;
