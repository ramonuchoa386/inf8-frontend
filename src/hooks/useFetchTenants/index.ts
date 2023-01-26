import React, { useState, useEffect } from 'react';

export interface IFetchTenantsHook {
  data?: string[];
  error?: string;
  loading: boolean;
}

const useFetchTenants = (): IFetchTenantsHook => {
  const [data, setData] = useState<string[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setData(() => ['Oi', 'Vero', 'Claro', 'Obvius', 'Algar']);
      setError(undefined);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { data, error, loading };
};

export default useFetchTenants;
