# Asynchronous File Reader

[![Greenkeeper badge](https://badges.greenkeeper.io/Thomas-P/file-reader.svg)](https://greenkeeper.io/)
File reader allows to read a file line wise. The advantage by this module is that you can write your asynchronous code in a linear way. That reduces the complexity of code. Using readFileSync could become complicated, when you should handle large files. 
```typescript
const async main() {
    import {FileReader} from 'file-reader';
    const fileReader = new FileReader('README.md');
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

