import md5 from 'js-md5';
import {PUBLIC_KEY, PRIVATE_KEY} from '../../const.dev';

const publicKey = PUBLIC_KEY;
const privateKey = PRIVATE_KEY;

const timestamp = Date.now();
const hash = md5.create();
hash.update(timestamp + privateKey + publicKey);

export {publicKey, timestamp, hash};
