import assert from 'assert';
import sinon from 'sinon';
import timeout from './';


it('fd-timeout', () => {
  assert.equal(typeof timeout, 'function');
  assert.equal(typeof timeout(2), 'function');
  
  let spy = sinon.spy();
  let clock = sinon.useFakeTimers();

  timeout(2000)(spy);

  clock.tick(1999);
  assert(spy.notCalled);

  clock.tick(2000);
  assert(spy.called);
});
