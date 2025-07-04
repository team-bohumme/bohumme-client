import { Icon } from '@bds/icon';
import { Chip } from '@bds/ui';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      home-page 배포 테스트입니다 하룰라라
      <Icon name="add" />
      <Chip label="테스트1" color="primary" size="rectangular" />
      <Chip label="테스트2" color="gray" size="rectangular" />
      <Chip label="테스트3" color="gray" size="rounded" outline={true} />
      <Chip label="테스트4" color="primary" size="rounded" />
    </div>
  );
};

export default HomePage;
