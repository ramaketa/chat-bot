import { PassedTimePipe } from './passed-time.pipe';

describe('PassedTimePipe', () => {
    it('create an instance', () => {
        const pipe = new PassedTimePipe();
        expect(pipe).toBeTruthy();
    });
});
