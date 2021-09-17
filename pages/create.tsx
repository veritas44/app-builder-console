import React from 'react';
import {useRouter} from 'next/router';

import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ProjectTemplates from '../components/ProjectTemplates';
import NewProjectModal from '../components/NewProjectModal';
import ProjectBanner from '../components/ProjectBanner';

export default function ButtonAppBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    router.prefetch('/builder');
    if (window.opener) {
      window.opener.postMessage({name: 'test', url: window.location.href}, '*');
      window.close();
    }
  }, []);

  return (
    <div
      style={{
        flexGrow: 1,
        fontFamily: 'acumin-pro, sans-serif',
        fontStyle: 'normal',
      }}>
      <Navbar />
      <ProjectBanner />
      <Projects handleCreateNewProject={handleClickOpen} />
      <ProjectTemplates handleCreateNewProject={handleClickOpen} />
      <NewProjectModal handleClose={handleClose} isOpen={open} />
    </div>
  );
}
