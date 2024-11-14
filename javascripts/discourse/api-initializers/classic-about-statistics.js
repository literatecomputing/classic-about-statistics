import { apiInitializer } from "discourse/lib/api";
import ClassicAboutStatistics from "../components/classic-about-statistics";

export default apiInitializer("1.38.0", (api) => {
  api.renderInOutlet("about-after-moderators", ClassicAboutStatistics);
});
