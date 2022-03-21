require('./bootstrap');

window.$ = require('jquery')

require('datatables.net-dt');
require('datatables.net-fixedheader-dt');
require('./custom-datatable.js');

import Latinize from 'latinize';
window.latinize = Latinize;