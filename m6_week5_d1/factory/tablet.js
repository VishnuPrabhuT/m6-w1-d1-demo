const Tablet = function ({ ram, ssd, name, network }) {
    this.ram = ram || 0;
    this.ssd = ssd || 0;
    this.name = name || "";
    this.network = network || 0;
};

module.exports = Tablet;
