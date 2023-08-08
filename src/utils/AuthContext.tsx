import { createContext } from 'react';
import { STORAGE_KEY_CONSTANT } from '@/common/constants';
import { getToken } from './helper';

export default createContext({
  authenticated: Number(getToken()?.length) > 0
})
