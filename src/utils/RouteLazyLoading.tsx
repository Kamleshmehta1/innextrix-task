import { Suspense } from 'react';
import LoadingScreen from '../utils/LoadingScreen';

type LoadableProps = {
  children?: React.ReactElement;
};

const Loadable = (Component: any) => (props: LoadableProps) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
