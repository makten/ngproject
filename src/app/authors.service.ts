
export class AuthorsService {

  private _authors;

  getAuthors() {
    this._authors = ['Author1', 'Author2', 'Author3', 'Author4'];
    return this._authors;
  }

}
