/**
 * Created by nick on 5/17/16.
 */

export default(ngModule => {
    ngModule
        .controller('MainController', MainController);
});

function MainController() {
    var vm = this;

    this.name = 'Nick';
    this.surname = 'Peleh';
}