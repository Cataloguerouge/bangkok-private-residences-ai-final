import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface RouteState {
  path: string;
  search: string;
  params: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  search: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
  getQueryParams: () => URLSearchParams;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(() => {
    return {
      path: window.location.pathname || '/',
      search: window.location.search || '',
      params: {}
    };
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute({
        path: window.location.pathname || '/',
        search: window.location.search || '',
        params: {}
      });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (to: string) => {
    if (to === window.location.pathname + window.location.search) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Parse target path and search query
    const [targetPath, targetSearch] = to.split('?');
    const newSearch = targetSearch ? `?${targetSearch}` : '';

    window.history.pushState({}, '', to);
    setRoute({
      path: targetPath,
      search: newSearch,
      params: {}
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getQueryParams = () => {
    return new URLSearchParams(route.search);
  };

  return (
    <RouterContext.Provider value={{
      currentPath: route.path,
      search: route.search,
      params: route.params,
      navigate,
      getQueryParams
    }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
