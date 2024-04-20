import { Schema, model } from 'mongoose';
import { TNews } from './news.interface';

const newSchema = new Schema<TNews>(
  {
    title: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    body: {
      type: [
        {
          para: {
            type: String,
            required: true,
          },
          textSize: {
            type: String,
            enum: ['small', 'medium', 'large'],
            default: 'medium',
          },
        },
      ],
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const News = model<TNews>('News', newSchema);
