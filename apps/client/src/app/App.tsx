import { Button } from '@bds/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import CommunityPage from '@pages/community/CommunityPage';

import { queryClient } from '@shared/utils/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Button />
      <CommunityPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
