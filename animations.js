(function (name, definition, context) {
    if (typeof context['module'] != 'undefined' && context['module']['exports']) context['module']['exports'] = definition()
    else if (typeof context['define'] != 'undefined' && context['define'] == 'function' && context['define']['amd']) define(name, definition)
    else context[name] = definition()
})('tile-animation', function () {
    return {};
}, this);
