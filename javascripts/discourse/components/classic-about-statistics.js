import Component from "@glimmer/component";
// html/hbs From https://github.com/discourse/discourse/blob/cc447a1ae34466e6c92ba59a387165f4c213a326/app/assets/javascripts/discourse/app/templates/about.hbs#L142


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
