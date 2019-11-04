var $builtinmodule = function (name) {
	var mod = {};
	
	mod.BMP280 = new Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self) {
            self.temperature = mbData['temperature'];
            self.pressure = mbData['pressure'];
        });

        $loc.get_BMP_temperature = new Sk.builtin.func(function(self){
            self.temperature = mbData['temperature'];
        	return Sk.builtin.int_(self.temperature);
        });
        $loc.get_BMP_pressure = new Sk.builtin.func(function(self){
            self.pressure = mbData['pressure'];
        	return Sk.builtin.int_(self.pressure);
        });
    }, "BMP280", []);

    return mod;
};