export class CommentNotFound extends Error {
  constructor() {
    super()
    this.name = 'CommentNotFound'
  }
}
