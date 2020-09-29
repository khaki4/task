import homeCtroller from "./pages/home/controller";
import completeController from "./pages/complete/controller";

class AppRouter {
  route(_) {
    switch (location.pathname.slice(1)) {
      case "":
        homeCtroller.init(document.querySelector("#root"));
        break;
      case "complete":
        completeController.init(document.querySelector("#root"));
        break;
      default:
        location.href = "/";
    }
  }
}

export default new AppRouter();
