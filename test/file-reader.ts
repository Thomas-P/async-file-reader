import {FileReader} from "../lib/file-reader";
import {expect} from "mochaccino";
import {readFileSync} from "fs";

describe('FileReader', () => {
   it('Should have the right interface', () => {
       expect(typeof FileReader)
           .toBe('function', 'The FileReader class a a function constructor.');
       expect(typeof FileReader.createLineReader)
           .toBe('function', 'The FileReader class has a static method createLineReader');

       const fileReaderObject = FileReader.createLineReader('');
       expect(fileReaderObject instanceof FileReader).toBe(true);
   });

   it('Should have methods on FileReader object', () => {
       const fReader = new FileReader('');
       expect(fReader.readLine).toBeDefined();
       expect(typeof fReader.readLine).toBe('function');
   });

   it('Should read a file line wise', (done) => {
       const fReader = new FileReader(__filename);
       const fileData = readFileSync(__filename);
       const lines = fileData.toString().split(/\r\n|\n/);
       async function test()  {
           let lineCount = 0;
           let lineStr = '';
           try {
               while ((lineStr = await fReader.readLine()) != null) {

                   expect(lineStr).toBe(lines[lineCount++]);
               }
               done()
           } catch (e) {
               done(new Error('Error while read lines.'));
           }
       }
       test()
   });
});
