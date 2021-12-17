import RNFetchBlob from "rn-fetch-blob";

const fs = RNFetchBlob.fs
async function DataFile() {
    
    RNFetchBlob.fs.writeFile('./Mydatas.json', 'Jazzman', 'utf8')   
    .then((res)=>
    {
        console.log("Sucess",res);
    })
    .catch((err)=>
    {
        console.log("error",err);
    })
    



     
}
export default DataFile;



// function writeFile('../mydata/Mydatas.json', 'Jazzman', 'utf8'): Promise {
//     if (typeof path !== 'string') {
//       return Promise.reject(addCode('EINVAL', new TypeError('Missing argument "path" ')))
//     }
//     if (encoding.toLocaleLowerCase() === 'ascii') {
//       if (!Array.isArray(data)) {
//         return Promise.reject(addCode('EINVAL', new TypeError('"data" must be an Array when encoding is "ascii"')))
//       }
//       else
//         return RNFetchBlob.writeFileArray(path, data, false)
//     }
//     else {
//       if (typeof data !== 'string') {
//         return Promise.reject(addCode('EINVAL', new TypeError(`"data" must be a String when encoding is "utf8" or "base64", but it is "${typeof data}"`)))
//       }
//       else
//         return RNFetchBlob.writeFile(path, encoding, data, false)
//     }
//   }


//   function writeStream(
//     path: string,
//     encoding?: 'utf8' | 'ascii' | 'base64' = 'utf8',
//     append?: boolean = false,
//   ): Promise<RNFetchBlobWriteStream> {
//     if (typeof path !== 'string') {
//       return Promise.reject(addCode('EINVAL', new TypeError('Missing argument "path" ')))
//     }
//     return new Promise((resolve, reject) => {
//       RNFetchBlob.writeStream(path, encoding, append, (errCode, errMsg, streamId: string) => {
//         if (errMsg) {
//           const err = new Error(errMsg)
//           err.code = errCode
//           reject(err)
//         }
//         else
//           resolve(new RNFetchBlobWriteStream(streamId, encoding))
//       })
//     })
//   }