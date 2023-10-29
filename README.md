# crypto-js-SEED
CryptoJS 패키지에 한국 표준 SEED 알고리즘 지원 추가

## How To Use
```javascript
const CryptoJS = require('./crypto-js');

const encrypted = CryptoJS.SEED.encrypt(plainValue, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding })
const decrypted = CryptoJS.SEED.decrypt(encrypted, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding })
```

자세한 사용법은 [example.js](https://github.com/argon1025/crypto-js/blob/master/example.js)를 참고하세요

example.JS에는 다음 시나리오에 대한 예제가 작성되어 있습니다
- NodeJS에서 평문을 SEED로 암복호화 하는 과정
- SEED로 암호화되고 HEX로 저장되어 관리되는 데이터를 복호화하는 과정 (특정 공공기관 대응)
