import { useTextInputStore } from "../../../store/useTextInputStore";
import { InputTextArea } from "../../ui/inputTextArea";
import classes from "./inputBlock.module.scss";

export const InputBlock = () => {
  const state = useTextInputStore();
  return (
    <div className={classes.InputBlock}>
      <div className={`${classes.content} content`}>
        <InputTextArea
          value={state.text}
          onChange={(e) => {
            state.setText(e.target.value);
          }}
          placeholder="Введите здесь значение преобразования"
        />
      </div>
    </div>
  );
};
