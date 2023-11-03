import { NavigateFunction } from 'react-router-dom';

type ParamProps = {
  title?: string;
  category?: string;
  status?: string;
};

export const SearchSubmitHandler = (
  navigate: NavigateFunction,
  query?: string,
  category?: string,
  status?: string,
) => {
  const paramsObj: ParamProps = {};
  if (query) paramsObj.title = query;
  if (category) paramsObj.category = category;
  if (status) paramsObj.status = status;

  const searchParams = new URLSearchParams(paramsObj);
  navigate({
    pathname: '/lectures/filter',
    search: `${searchParams.toString()}`,
  });
};

export const SearchHandleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setInputValue: (value: string) => void,
) => {
  // const { inputValue, setInputValue } = useSearchStore();
  setInputValue(e.target.value);
  console.log(`현재 검색어 : ${e.target.value}`);
};
