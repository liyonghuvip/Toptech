import {Injectable} from "angular2/src/core/di/decorators";


@Injectable()

export class backgroundService {
  getBackground() {
    return Promise.resolve([
      {
        imgPath: "1111",
      },
      {
        imgPath: "2222",
      },
      {
        imgPath: "333",
      },
      {
        imgPath: "44",
      }
    ])
  }
}
