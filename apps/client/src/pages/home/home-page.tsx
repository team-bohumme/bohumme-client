import { Icon } from '@bds/icon';
import { Navigation } from '@bds/ui';

const HomePage = () => {
  return (
    <div>
      <Navigation
        leftIcon={<Icon name="arrow_left" />}
        rightIcon={<Icon name="home" />}
        title="커뮤니티"
      />
    </div>
  );
};

export default HomePage;
