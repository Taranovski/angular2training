export class Book {
  constructor(public id:number,
              public name:string,
              public field:string,
              public topic:string,
              public releaseYear:Date,
              public authors:string[]) {
  }

  public toString():string {
    return "[Book: " + "id: " + this.id +
      "name: " + this.name +
      " field " + this.field +
      " topic " + this.topic +
      " releaseYear " + this.releaseYear.toDateString() +
      " authors " + this.authors + "]";

  }
}
