import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function MainLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
