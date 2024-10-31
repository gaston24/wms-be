import { Article } from '../models/article';

export async function createArticle(data: { code: string; description: string }): Promise<Article> {
  return await Article.create(data);
}

export async function getAllArticles(): Promise<Article[]> {
  return await Article.findAll();
}

export async function getArticleById(id: number): Promise<Article | null> {
  return await Article.findByPk(id);
}

export async function updateArticle(id: number, data: { code?: string; description?: string }): Promise<[number]> {
  return await Article.update(data, { where: { id } });
}

export async function deleteArticle(id: number): Promise<number> {
  return await Article.destroy({ where: { id } });
}
