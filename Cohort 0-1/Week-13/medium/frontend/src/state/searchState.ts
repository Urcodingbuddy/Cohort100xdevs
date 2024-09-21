import { atom } from 'recoil';

export const searchQueryState = atom<string>({
    key: 'searchQueryState', // Unique key for the atom
    default: '', // Default value (empty string)
});
