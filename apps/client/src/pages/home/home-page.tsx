import { Tab, TabProvider } from '@bds/ui';

const TABS = [
  { id: 1, value: '큰 병' },
  { id: 2, value: '수술' },
  { id: 3, value: '입원' },
  { id: 4, value: '장해' },
  { id: 5, value: '사망' },
];

const HomePage = () => {
  return (
    <>
      <TabProvider initialValue={TABS[0].value}>
        <Tab>
          <Tab.List>
            {TABS.map(({ id, value }) => (
              <Tab.Item key={id} value={value} />
            ))}
          </Tab.List>
        </Tab>
        {TABS.map(({ id, value }) => (
          <Tab.Panel tab={value} key={id}>
            {value} 입니다.
          </Tab.Panel>
        ))}
      </TabProvider>
    </>
  );
};

export default HomePage;
