export class Book {
  constructor(
    public name:string,
    public field:string,
    public topic:string,
    public releaseYear:Date,
    public authors:string[]
  ){}
}
