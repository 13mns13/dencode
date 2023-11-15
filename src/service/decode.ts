import { ICode } from "./model";
export const decodeHex = (hexStr: string) => {
  const bytes = new Uint8Array(
    (hexStr.match(/.{1,2}/g) || []).map((byte) => parseInt(byte, 16))
  );
  return new TextDecoder().decode(bytes);
};

export const decodeBase64 = (text: string) => {
  try {
    return atob(text.replace(/[^A-Za-z0-9+/=]/g, ""));
  } catch {
    return "";
  }
};

export const decodeFromBinaryString = (text: string) => {
  return text
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
};

const caesarCipherDecrypt = (text: string) => {
  const shift = 5;
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code < 97 ? 65 : 97;
        return String.fromCharCode(((code - base - shift + 26) % 26) + base);
      } else if (char.match(/[а-я]/i)) {
        const code = char.charCodeAt(0);
        const base = code < 1072 ? 1040 : 1072;
        return String.fromCharCode(((code - base - shift + 32) % 32) + base);
      }
      return char;
    })
    .join("");
};

const decodeFromQuotedPrintable = (text: string) => {
  return text.replace(/=([A-F0-9]{2})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );
};

const decodeHTMLEntities = (text: string) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};
export const decodes: Array<ICode> = [
  {
    name: "Строка Hex",
    function: decodeHex,
  },
  {
    name: "Base64",
    function: decodeBase64,
  },
  {
    name: "Двоичная строка",
    function: decodeFromBinaryString,
  },
  {
    name: "Шифр Цезаря",
    function: caesarCipherDecrypt,
  },
  {
    name: "QP",
    function: decodeFromQuotedPrintable,
  },
  {
    name: "HTML Escape (Fully)",
    function: decodeHTMLEntities,
  },
];
