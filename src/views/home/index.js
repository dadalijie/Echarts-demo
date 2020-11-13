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
  created() {
    this.currentIndex = Number(sessionStorage.currentIndex) || 0
  },
  methods: {
    changeEcharts(path, index) {
      sessionStorage.currentIndex = index
      this.currentIndex = index
      this.$router.push(path)
    }
  }
}