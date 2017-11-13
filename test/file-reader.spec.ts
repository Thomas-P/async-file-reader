import {AsyncFileReader} from "../lib/file-reader";
import {expect} from "mochaccino";
import {readFileSync} from "fs";
import {} from "mocha"

describe('FileReader', () => {
    it('Should have the right interface', () => {
        expect(typeof AsyncFileReader)
            .toBe('function');
        expect(typeof AsyncFileReader.createLineReader)
            .toBe('function');

        const fileReaderObject = AsyncFileReader.createLineReader('');
        expect(fileReaderObject instanceof AsyncFileReader).toBe(true);
    });

    it('Should have methods on AsyncFileReader object', () => {
        const fReader = new AsyncFileReader('');
        expect(fReader.readLine).toBeDefined();
        expect(typeof fReader.readLine).toBe('function');
    });

    /**
     * Check if we can read the file line by line
     */
    it('Should read a file line by line', async () => {
        const fReader = new AsyncFileReader(__filename);
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
        const fReader = new AsyncFileReader(__filename);
        while (await fReader.readLine() !== undefined) {
        }
        expect(await fReader.readLine()).toBe(undefined)
    });


});
