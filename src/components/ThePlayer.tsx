import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import BaseIconButton from "./BaseIconButton";
import BaseTime from "./BaseTime";
import { usePlayer as usePlayerDI } from "../hooks";

function ThePlayer({ usePlayer = usePlayerDI }) {
  const { state, handlers } = usePlayer();
  return (
    <div>
      <div className="form-group">
        <input
          type="file"
          id="dropFile"
          className="form-input"
          accept="audio/midi"
          onChange={handlers.dropFile}
        />
      </div>
      <div className="el-cluster el-cluster--justify:flex-start">
        <BaseIconButton
          onClick={handlers.PlayPause}
          iconProp={state.toneState !== "started" ? faPlay : faPause}
          disabled={state.playerDisabled}
        />
        <BaseIconButton
          onClick={handlers.stop}
          iconProp={faStop}
          disabled={state.playerDisabled}
        />
        <BaseTime time={state.time} duration={state.duration} />
      </div>
    </div>
  );
}

export default ThePlayer;
