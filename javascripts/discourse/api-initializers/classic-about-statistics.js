import { apiInitializer } from "discourse/lib/api";
import ClassicAboutStatistics from "../components/classic-about-statistics";

export default apiInitializer((api) => {
  api.renderInOutlet("about-after-moderators", ClassicAboutStatistics);
});
