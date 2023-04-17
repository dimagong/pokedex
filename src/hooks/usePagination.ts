import { useState } from "react";

interface IPagination{
    data: any[],
    itemsPage: number
}

export const usePagination = ({data, itemsPage}: IPagination) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPage;
    const end = begin + itemsPage;
    return data.slice(begin, end);
  }

  const next = () =>{
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  const prev = () =>{
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function pass(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { pass, currentData };
}

