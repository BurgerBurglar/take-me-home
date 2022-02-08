import { Dispatch, SetStateAction, useState } from "react";

interface Props<Params, Data> {
  params: Params;
  initialPage: number;
  totalPages: number;
  fetcher: (params: Params) => Promise<Data[]>;
  setter: Dispatch<SetStateAction<Data[]>>;
}

const usePagination = <Params, Data>({
  params,
  initialPage,
  totalPages,
  fetcher,
  setter,
}: Props<Params, Data>) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const hasNextPage = totalPages > currentPage;

  const fetchNextPage = async () => {
    if (!hasNextPage) return;
    setIsLoading(true);
    const moreData = await fetcher({ ...params, page: currentPage + 1 });
    setter((prev) => [...prev, ...moreData]);
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  };
  return {
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
};
export default usePagination;
