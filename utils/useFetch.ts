import { useEffect, useState } from "react";

const useFetch = <T>(
  fetcher: () => Promise<T>,
  initial: T,
  dependency: any[]
): [T, { loading: boolean; error: unknown }] => {
  const [value, setValue] = useState<T>(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    console.log("rendered");
    setLoading(true);
    const fetch = async () => {
      try {
        const data = await fetcher();
        setValue(data);
      } catch (err) {
        setError(err);
      }
    };
    fetch();
    setLoading(false);
  }, [...dependency]);

  return [value, { loading, error }];
};
export default useFetch;
