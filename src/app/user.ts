export class User {
  [x: string]: string;
  constructor(
    public username: string,
    public url: string,
    public image: string
    ) {}
}
