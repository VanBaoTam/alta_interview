import { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";
import "./index.css";
const CaptchaInput = () => {
  const [captcha, setCaptcha] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCaptcha = [...captcha];
    newCaptcha[index] = value;
    setCaptcha(newCaptcha);

    if (value !== "" && index < 3) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && captcha[index] === "" && index > 0) {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    const newCaptcha = [...captcha];
    pastedData.split("").forEach((char, index) => {
      if (index < 4) newCaptcha[index] = char;
    });
    setCaptcha(newCaptcha);

    const lastFilledIndex = newCaptcha.findIndex((val) => val === "");
    if (lastFilledIndex === -1) {
      inputRefs[3]?.current?.focus();
    } else {
      inputRefs[lastFilledIndex]?.current?.focus();
    }
  };

  return (
    <div className="captcha-container">
      <div className="captcha-input-group">
        {captcha.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="captcha-input"
            style={{ marginLeft: "1rem" }}
          />
        ))}
      </div>
    </div>
  );
};

export default CaptchaInput;
