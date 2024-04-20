import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { newsService } from './news.service';

const createNews = catchAsync(async (req, res) => {
  const result = await newsService.createNewsIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News created successfully',
    data: result,
  });
});

const getNews = catchAsync(async (req, res) => {
  const result = await newsService.getNewsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News fetched successfully',
    data: result,
  });
});

const getNewsById = catchAsync(async (req, res) => {
  const result = await newsService.getNewsByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News fetched successfully',
    data: result,
  });
});

const updateNews = catchAsync(async (req, res) => {
  const result = await newsService.updateNewsInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News updated successfully',
    data: result,
  });
});

const deleteNews = catchAsync(async (req, res) => {
  const result = await newsService.deleteNewsFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News deleted successfully',
    data: result,
  });
});

export const newsController = {
  createNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
};
