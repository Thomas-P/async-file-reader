# Asynchronous File Reader
[![Greenkeeper badge](https://badges.greenkeeper.io/Thomas-P/file-reader.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/Thomas-P/file-reader.svg?branch=master)](https://travis-ci.org/Thomas-P/file-reader) [![Coverage Status](https://coveralls.io/repos/github/Thomas-P/file-reader/badge.svg)](https://coveralls.io/github/Thomas-P/file-reader) [![Known Vulnerabilities](https://snyk.io/test/github/thomas-p/file-reader/badge.svg)](https://snyk.io/test/github/thomas-p/file-reader)


File reader allows to read a file line by line. The advantage by this module is that you can write your asynchronous code in a linear way. That reduces the complexity of code. Using readFileSync could become complicated, when you should handle large files.

Another feature is, that if you do not add a callback with `readLine()` the stream is posed and will not waste memory. 
## Usage
```typescript
const main = async () => {
    import {AsyncFileReader} from 'async-file-reader';
    const fileReader = new AsyncFileReader('README.md');
    let line: string;
    try {
        while ((line = await fileReader.readLine()) != null) {
            // do something
        } 
    } catch (error) {
        console.log('An Error happened while reading the file.');
    }
}

main()
    .catch(() => /* handle error in main function */ );
```

