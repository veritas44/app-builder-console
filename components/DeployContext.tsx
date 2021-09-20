import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
export enum DeployStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAILURE = 'FAILURE',
  NONE = 'NONE',
}

interface DeployContext {
  herokuStatus: DeployStatus;
  setHerokuStatus: Dispatch<SetStateAction<DeployStatus>>;
  vercelStatus: DeployStatus;
  setVercelStatus: Dispatch<SetStateAction<DeployStatus>>;
}

const DeployContext = createContext(null as unknown as DeployContext);

export function DeployContextProvider({children}: React.PropsWithChildren<{}>) {
  //   const [APIError, setAPIError] = useState<string>('');
  const [herokuStatus, setHerokuStatus] = useState<DeployStatus>(
    DeployStatus.NONE,
  );
  const [vercelStatus, setVercelStatus] = useState<DeployStatus>(
    DeployStatus.NONE,
  );

  return (
    <DeployContext.Provider
      value={{
        herokuStatus,
        vercelStatus,
        setHerokuStatus,
        setVercelStatus,
      }}>
      {children}
    </DeployContext.Provider>
  );
}
export function useDeploy() {
  const context = useContext(DeployContext);
  if (context === undefined) {
    throw new Error(`useApiStatus must be used within a DeployContext`);
  }
  return context;
}

export default DeployContext;
