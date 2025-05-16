import { useState, useEffect } from 'react';

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface FetchOptions {
  method?: HTTPMethod;
  body?: Record<string, unknown> | string | null;
  headers?: Record<string, string>;
}

const useFetch = <T>(url: string, options: FetchOptions = {}): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { method = 'GET', body = null, headers = {} } = options;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: typeof body === 'object' ? JSON.stringify(body) : body,
        });

        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage += ` - ${errorData?.message || 'Sin mensaje de error del servidor'}`;
          } catch (e) {
            console.error('Error al parsear JSON del error:', e);
          }
          throw new Error(errorMessage);
        }

        const json: T = await response.json();
        setData(json);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, JSON.stringify(headers)]);

  return { data, loading, error };
};

export default useFetch;
