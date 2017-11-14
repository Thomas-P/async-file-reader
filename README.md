# Asynchronous File Reader
[![Greenkeeper badge](https://badges.greenkeeper.io/Thomas-P/async-file-reader.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/Thomas-P/async-file-reader.svg?branch=master)](https://travis-ci.org/Thomas-P/async-file-reader) [![Coverage Status](https://coveralls.io/repos/github/Thomas-P/async-file-reader/badge.svg)](https://coveralls.io/github/Thomas-P/async-file-reader) [![Known Vulnerabilities](https://snyk.io/test/github/thomas-p/async-file-reader/badge.svg)](https://snyk.io/test/github/thomas-p/async-file-reader)


File reader allows to read a file line by line. The advantage by this module is that you can write your asynchronous code in a linear way. That reduces the complexity of code. Using readFileSync could become complicated, when you should handle large files.

Another feature is, that if you do not add a callback with `readLine()` the stream is paused and will not waste memory. 
## Usage
```typescript
import {AsyncFileReader} from 'async-file-reader';

const main = async () => {
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

