import Post from './Post.js';
import PostServise from './PostServise.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostServise.create(req.body, req.files.picture);
      res.json(post);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostServise.getAll()
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostServise.getOne(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostServise.update(req.body)
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  async delete(req, res) {
    try {
      const post = await PostServise.delete(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PostController()