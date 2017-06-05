"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_reader_1 = require("../lib/file-reader");
const mochaccino_1 = require("mochaccino");
const fs_1 = require("fs");
describe('FileReader', () => {
    it('Should have the right interface', () => {
        mochaccino_1.expect(typeof file_reader_1.FileReader)
            .toBe('function', 'The FileReader class a a function constructor.');
        mochaccino_1.expect(typeof file_reader_1.FileReader.createLineReader)
            .toBe('function', 'The FileReader class has a static method createLineReader');
        const fileReaderObject = file_reader_1.FileReader.createLineReader('');
        mochaccino_1.expect(fileReaderObject instanceof file_reader_1.FileReader).toBe(true);
    });
    it('Should have methods on FileReader object', () => {
        const fReader = new file_reader_1.FileReader('');
        mochaccino_1.expect(fReader.readLine).toBeDefined();
        mochaccino_1.expect(typeof fReader.readLine).toBe('function');
    });
    it('Should read a file line wise', (done) => {
        const fReader = new file_reader_1.FileReader(__filename);
        const fileData = fs_1.readFileSync(__filename);
        const lines = fileData.toString().split(/\r\n|\n/);
        console.log(__filename);
        function test() {
            return __awaiter(this, void 0, void 0, function* () {
                let lineCount = 0;
                let lineStr = '';
                try {
                    while ((lineStr = yield fReader.readLine()) != null) {
                        mochaccino_1.expect(lineStr).NotToBe(lines[lineCount++]);
                    }
                    done();
                }
                catch (e) {
                    done(new Error('Error while read lines.'));
                }
            });
        }
        test();
    });
});
//# sourceMappingURL=file-reader.js.map