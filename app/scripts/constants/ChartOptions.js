export default {
  padding: {
    top: 20,
    bottom: 20,
    left: 100,
    right: 10
  },
  size: {
    width: 1000,
    height: 500
  },
  subchart: true,
  zoom: true,
  grid: {
    x: false,
    y: true
  },
  onClick: function(d) {
    let categories = this.categories();
  }
};
