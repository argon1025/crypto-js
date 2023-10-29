/* eslint-disable */
const CryptoJS = require('./');

/**
 * 평문을 암호화 복호화하는 과정
 */

const plainText = '안녕하세요';
// Seed 알고리즘의 키는 16바이트이다.
const key = CryptoJS.enc.Hex.parse(string_to_utf8_hex_string('2013070198765432'));
const plainValue = CryptoJS.enc.Utf8.parse(plainText);
const encrypted = CryptoJS.SEED.encrypt(plainValue, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding })
const decrypted = CryptoJS.SEED.decrypt(encrypted, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding })
console.log(`"${plainText}" 암호화 결과 : ${encrypted}`)
console.log(`"${encrypted.toString()}" 복호화 결과 : ${CryptoJS.enc.Utf8.stringify(decrypted)}`)

/**
 * Hex로 저장된 암호문을 Base64로 인코딩하여 복호화 하는 과정
 */
// 7a9ff2441b4e5e109e965cc55ab13977
const hexText = base64_To_Hex('ep/yRBtOXhCellzFWrE5dw==');
const encryptText = hexToBase64(hexText);
const decrypted2 = CryptoJS.SEED.decrypt(encryptText, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding })
console.log(`${hexText} 복호화 결과 : ${CryptoJS.enc.Utf8.stringify(decrypted2)}`);


function hexToBase64(hexString) {
  // 16진수 문자열을 바이너리 데이터로 변환
  let bytes = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    bytes[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
  }

  // 바이너리 데이터를 Base64 형식의 문자열로 인코딩
  let base64String = btoa(String.fromCharCode.apply(null, bytes));

  return base64String;
}
function string_to_utf8_hex_string(text) {
  var bytes1 = string_to_utf8_bytes(text);
  var hex_str1 = bytes_to_hex_string(bytes1);
  return hex_str1;
}
function string_to_utf8_bytes(text) {
  var result = [];
  if (text == null) return result;
  for (var i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if (c <= 0x7f) {
      result.push(c);
    } else if (c <= 0x07ff) {
      result.push(((c >> 6) & 0x1f) | 0xc0);
      result.push((c & 0x3f) | 0x80);
    } else {
      result.push(((c >> 12) & 0x0f) | 0xe0);
      result.push(((c >> 6) & 0x3f) | 0x80);
      result.push((c & 0x3f) | 0x80);
    }
  }
  return result;
}
function bytes_to_hex_string(bytes) {
  var result = '';
  for (var i = 0; i < bytes.length; i++) {
    result += byte_to_hex(bytes[i]);
  }
  return result;
}
function byte_to_hex(byte_num) {
  var digits = byte_num.toString(16);
  if (byte_num < 16) return '0' + digits;
  return digits;
}
function base64_To_Hex(base64String) {
  // Base64 문자열을 디코딩하여 이진 데이터를 얻습니다.
  var binaryData = atob(base64String);
  
  // 이진 데이터를 Hex 문자열로 변환합니다.
  var hexString = '';
  for (var i = 0; i < binaryData.length; i++) {
    var hex = binaryData.charCodeAt(i).toString(16);
    hexString += (hex.length === 2 ? hex : '0' + hex);
  }
  
  return hexString;
}
