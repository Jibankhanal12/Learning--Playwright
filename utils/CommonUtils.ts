import cryptoJs from "crypto-js";

export default class CommonUtils {
}
//   private secretKey: string;

//   /**
//    * Initialize secrate key from environment variable
//    */
//   constructor() {
//     if (process.env.secretKey) {
//       this.secretKey = process.env.secretKey;
//     } else {
//       throw new Error("Secret key not found in environment variables");
//     }
//   }

//   /**
//    * Provide data from string and it will return encrypted data
//    * @param data
//    * @returns
//    */
//   public encryptData(data: string) {
//     const enccryptedData = cryptoJs.AES.encrypt(
//       data,
//       this.secretKey
//     ).toString();
//     console.log(enccryptedData.toString());
//     return enccryptedData.toString();
//   }

//   /**
//    * Provide decrypted data in string format
//    * @param data
//    * @returns
//    */
//   public decryptData(data: string) {
//     const decryptData = cryptoJs.AES.decrypt(data, this.secretKey).toString(
//       cryptoJs.enc.Utf8
//     );
//     return decryptData;
//   }
// }
