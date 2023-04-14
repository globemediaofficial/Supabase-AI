export default class Post {
  postId: string;
  uid?: string;
  imageUrl: string;
  prompt: string;
  createdAt: number;

  constructor(post: any) {
    this.postId = post.postId;
    this.uid = post.uid;
    this.imageUrl = post.imageUrl;
    this.prompt = post.prompt;
    this.createdAt = post.date;
  }
}
