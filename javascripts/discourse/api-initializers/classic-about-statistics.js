import { apiInitializer } from "discourse/lib/api";
import ClassicAboutStatistics from "../components/classic-about-statistics";

export default apiInitializer("1.38.0", (api) => {
  api.renderInOutlet("about-after-moderators", ClassicAboutStatistics);
  // api.renderInOutlet("about-wrapper", ClassicAboutStatistics);
  let myAboutModel = api.container.lookup("controller:about").get('model');

  api.addAboutPageActivity("about", (periods) => {
    return {
      icon: "guitar",
      class: "released-songs",
      activityText: `${about["today"]} today`,
      period: "in the last year",
    };
  });
});
