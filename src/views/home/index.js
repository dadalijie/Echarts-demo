export default {
  name: 'home',
  data() {
    return {
      currentIndex: 0,
      nameList: [
        {
          name: '柱状图',
          type: 'Bar',
          path: '/pageBar',
          iconClass: 'icon-tubiao'
        },
        {
          name: '折线图',
          type: 'Line',
          path: '/pageLine',
          iconClass: 'icon-tubiao-zhexiantu'
        },
        {
          name: '饼图',
          type: 'Pie',
          path: '/pagePie',
          iconClass: 'icon-tubiao1'
        },
      ]
    }
  },
  methods: {
    changeEcharts(path, index) {
      this.currentIndex = index
      this.$router.push(path)
    }
  }
}