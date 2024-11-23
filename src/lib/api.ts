import axios from 'axios'

const api_url = 'http:localhost:1331/api'

interface Image {
  id: number;
  documentId: string;
  ImageName: string;
  Description: string;
  originalImage: string;
  thumbnailImage: string;
  smallImage: string;
  mediumImage: string;
  largeImage: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponseItem {
  id: number;
  documentId: string;
  ImageName: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  Image: Array<{
    url: string;
    formats: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  }>;
}

export const getImages = async (): Promise<Image[]> => {
  try {
    const response = await axios.get(`${api_url}/images?populate=*`);
    return response.data.data.map((item: ApiResponseItem): Image => ({
      id: item.id,
      documentId: item.documentId,
      ImageName: item.ImageName,
      Description: item.Description,
      originalImage: item.Image[0]?.url || '',
      thumbnailImage: item.Image[0]?.formats?.thumbnail?.url || '',
      smallImage: item.Image[0]?.formats?.small?.url || '',
      mediumImage: item.Image[0]?.formats?.medium?.url || '',
      largeImage: item.Image[0]?.formats?.large?.url || '',
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));
  } catch (error) {
    console.error('Błąd podczas pobierania obrazów z API:', error);
    return [];
  }
};