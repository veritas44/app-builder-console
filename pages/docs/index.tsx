import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/docs/Frontend/Build-guide');
  });
  return <></>;
};

export default Index;
