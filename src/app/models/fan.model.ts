export class Fan {
  constructor(
    private _name: string,
    private _age: number,
    private _country: string,
    private _profilePictureUrl = 'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg'
  ) {}

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }

  public get profilePictureUrl() {
    return this._profilePictureUrl;
  }
  public set profilePictureUrl(value: string) {
    this._profilePictureUrl = value;
  }

}
