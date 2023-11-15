import { ICode } from "./model";

export const encodeHex = (text: string) => {
  return Array.from(new TextEncoder().encode(text))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const encodeBase64 = (text: string) => {
  try {
    return btoa(text.replace(/[^A-Za-z0-9+/=]/g, ""));
  } catch {
    return "";
  }
};

const encodeToBinaryString = (text: string) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
};

const caesarCipherEncrypt = (text: string) => {
  const shift = 5;
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code < 97 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
      } else if (char.match(/[а-я]/i)) {
        const code = char.charCodeAt(0);
        const base = code < 1072 ? 1040 : 1072;
        return String.fromCharCode(((code - base + shift) % 32) + base);
      }
      return char;
    })
    .join("");
};

const encodeToQuotedPrintable = (text: string) => {
  const ascii = text.split("").map((char) => {
    const code = char.charCodeAt(0);
    if ((code > 31 && code < 61) || (code > 61 && code < 127)) {
      return char;
    } else {
      return `=${code.toString(16).toUpperCase()}`;
    }
  });

  return ascii.join("");
};

const encodeAllCharactersToHTMLEntities = (text: string) => {
  return text
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

export const encodes: Array<ICode> = [
  {
    name: "Строка Hex",
    function: encodeHex,
  },
  {
    name: "Base64",
    function: encodeBase64,
  },
  {
    name: "Двоичная строка",
    function: encodeToBinaryString,
  },
  {
    name: "Шифр Цезаря",
    function: caesarCipherEncrypt,
  },
  {
    name: "QP",
    function: encodeToQuotedPrintable,
  },
  {
    name: "HTML Escape (Fully)",
    function: encodeAllCharactersToHTMLEntities,
  },
];
