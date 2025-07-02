import { ThemeProvider } from '@bds/ui';
import { rootStyle } from '@bds/ui/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Icon } from '@bds/icon';

import { queryClient } from '@shared/utils/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider className={rootStyle}>
        {/* <RouterProvider /> */}
        <ReactQueryDevtools initialIsOpen={false} />
        <Icon name="ai" width={60} height={60} color="primary600" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import 'virtual:svg-sprite';
