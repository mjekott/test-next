import { authApi } from 'src/lib/fetch';
import { IGetTopics } from './../types/index';

interface IGetCoreTopics {
  pageParams?: number;
}

export const getCoreTopics = async ({ pageParams = 0 }: IGetCoreTopics) => {
  const response = await authApi.get<IGetTopics>(
    `/cem/topics?page=${pageParams}&size=5&core=true`
  );
  return response.data;
};
