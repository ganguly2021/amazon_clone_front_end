import React from "react";
import classnames from "classnames";

function TextAreaInput({
  name,
  id,
  className,
  onChange,
  placeholder,
  value,
  error,
  t,
  i18n,
  lblText,
  infoText,
  disabled,
}) {
  const rtl = i18n.languages[0] == "pk" ? "text-right" : "";

  return (
    <div className="form-group">
      {lblText && (
        <label htmlFor={id} className={`${rtl}`}>
          {lblText}
        </label>
      )}

      <textarea
        name={name}
        className={classnames(className, {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
      {infoText && (
        <small className={`form-text text-muted ${rtl}`}>
          <i className="fas text-primary fa-info"></i> {t(infoText)}
        </small>
      )}
      {error && (
        <div className={`invalid-feedback ${rtl}`}>
          <i className="fas text-danger fa-exclamation-triangle"></i> {t(error)}
        </div>
      )}
    </div>
  );
}

export default TextAreaInput;
