import { TNews } from './news.interface';
import { News } from './news.model';

const createNewsIntoDB = async (payload: TNews) => {
  const news = await News.create(payload);
  return news;
};

const getNewsFromDB = async () => {
  const news = await News.find();
  return news;
};

const getNewsByIdFromDB = async (id: string) => {
  const news = await News.findById(id);
  return news;
};

const updateNewsInDB = async (id: string, payload: TNews) => {
  const news = await News.findByIdAndUpdate(id, payload, { new: true });
  return news;
};

const deleteNewsFromDB = async (id: string) => {
  await News.findByIdAndDelete(id);
};

export const newsService = {
  createNewsIntoDB,
  getNewsFromDB,
  getNewsByIdFromDB,
  updateNewsInDB,
  deleteNewsFromDB,
};
