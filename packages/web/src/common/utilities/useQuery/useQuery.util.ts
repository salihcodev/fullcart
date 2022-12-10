import { useMemo } from 'react';

export const useQuery = (search: string) => {
  return useMemo(() => new URLSearchParams(search), [search]);
};
