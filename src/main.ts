import Ractive = require('ractive');

var AppFooter = Ractive.extend({
  
  isolated: false,
  template: require('../templates/appFooter.html')

});

var OffCanvasBar = Ractive.extend({
  isolated:false,
  template: require('../templates/offCanvasBar.html')
});

var TopNavBar = Ractive.extend({
  isolated:false,
  template: require('../templates/topNavBar.html')
});

var WelCome = Ractive.extend({
  isolated:false,
  template:require('../templates/welcome.html')
});
/** 
 * APP
 */
var ractive = new Ractive({
  
  el: '#container',
  template: require('../templates/appContainer.html'),
  data: { 
    greeting: 'Hello',
    recipient: 'world' 
    },
    
  components:{
    AppFooter: AppFooter,
    OffCanvasBar: OffCanvasBar,
    TopNavBar:TopNavBar,
    WelCome: WelCome
    
    }
});