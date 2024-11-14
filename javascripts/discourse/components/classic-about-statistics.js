import Component from "@glimmer/component";
// html/hbs From https://github.com/discourse/discourse/blob/cc447a1ae34466e6c92ba59a387165f4c213a326/app/assets/javascripts/discourse/app/templates/about.hbs#L142

export default class ClassicAboutStatistics extends Component {
  get model() {
    return this.args.outletArgs.model;
  }
}
