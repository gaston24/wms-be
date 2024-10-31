import { Request, Response } from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } from '../services/article.service';

class ArticleController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const article = await createArticle(req.body);
      res.status(201).json(article);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const articles = await getAllArticles();
    res.json(articles);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const article = await getArticleById(Number(req.params.id));
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }
    res.json(article);
  }

  async update(req: Request, res: Response): Promise<void> {
    const [updated] = await updateArticle(Number(req.params.id), req.body);
    if (!updated) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }
    res.json({ message: 'Article updated successfully' });
  }

  async delete(req: Request, res: Response): Promise<void> {
    const deleted = await deleteArticle(Number(req.params.id));
    if (!deleted) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }
    res.status(204).send();
  }
}

export default new ArticleController();
