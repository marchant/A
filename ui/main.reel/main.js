/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.data = [];
            for(var i=0;i<100;i++) {
                this.data[i] = i;
            }
        }
    },
    data: {
        value: ["a","b","c"]
    }
});
