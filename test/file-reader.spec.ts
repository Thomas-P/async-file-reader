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

    /**
     * Check if we can read the file line by line
     */
    it('Should read a file line by line', async () => {
        const fReader = new FileReader(__filename);
        const fileData = readFileSync(__filename);
        const lines = fileData.toString().split(/\r\n|\n/);
        let lineCount = 0;
        let lineStr = '';
        try {
            while ((lineStr = await fReader.readLine()) !== undefined) {

                expect(lineStr).toBe(lines[lineCount++]);
            }
        } catch (e) {
            throw new Error('Error while read lines.');
        }
    });

    it('Should return null or undefined, after all lines are read.', async () => {
        const fReader = new FileReader(__filename);
        while (await fReader.readLine() !== undefined) {
        }
        expect(await fReader.readLine()).toBe(undefined)
    });


});
