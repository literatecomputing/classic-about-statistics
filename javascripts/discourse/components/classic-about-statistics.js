import Component from "@glimmer/component";

export default class ClassicAboutStatistics extends Component {
  get statistics() {
    return this.args.outletArgs.model.stats;
  }
  get model () {
    return this.args.outletArgs.model;
  }
  // get shouldShow() {
  //   return settings.classic_about_statistics_enabled?.length > 0;
  // }
}
