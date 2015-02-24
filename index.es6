import { curry2 } from 'fj-curry';


let timeout = (duration, func) => window.setTimeout(func, duration);

export default curry2(timeout);
