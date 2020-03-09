import { RequestPipePipe } from './request-pipe.pipe';

describe('RequestPipePipe', () => {
  it('create an instance', () => {
    const pipe = new RequestPipePipe();
    expect(pipe).toBeTruthy();
  });
});
