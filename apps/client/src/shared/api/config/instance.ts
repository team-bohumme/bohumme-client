import ky from 'ky';

export const kyinstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
