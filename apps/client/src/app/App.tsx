import { ThemeProvider } from '@bds/ui';
import { rootStyle } from '@bds/ui/styles'; // Replace 'correctExportName' with the actual export name from the module
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@shared/utils/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider className={rootStyle}>
        {/* <RouterProvider /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
