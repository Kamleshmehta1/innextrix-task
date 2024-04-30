import { Suspense, ReactNode } from 'react';
import LoadingScreen from '../utils/LoadingScreen';

type LoadableProps = {
  children?: ReactNode;
};

const Loadable =
  (Component: React.ComponentType<LoadableProps>) => (props: LoadableProps) => {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
