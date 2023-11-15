import classes from "./inputTextArea.module.scss";

export type PropsInputTextArea = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export const InputTextArea = ({
  placeholder,
  value,
  onChange,
}: PropsInputTextArea) => {
  return (
    <div className={classes.InputTextArea}>
      <textarea placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};
