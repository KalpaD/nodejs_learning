var direct_function = require('./directExport');
var add_attr_to_mod_export = require('./addAttributeToExport');
var export_new_object = require('./functionConstructer');
var export_constrcuter_func = require('./functionConstructerRef');


module.exports = {
    direct_function:direct_function,
    add_attr_to_mod_export:add_attr_to_mod_export,
    export_new_object:export_new_object,
    export_constrcuter_func:export_constrcuter_func
}