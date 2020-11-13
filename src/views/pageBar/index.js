import BarChart from '../../components/echarts/mix/bar'
import propertyExplain from '../../assets/json/propertyExplain.json'
export default {
  name: 'pageBar',
  components: {
    BarChart
  },
  data() {
    return {
      explain: [],
      explainOptions: [],
      property: [],
      propertyOptions: [],
      optionData: {},
      propertyExplain: propertyExplain,
      currentExplain: '',
      currentProperty: '',
    }
  },
  watch: {
    currentExplain(v) {
      if (propertyExplain.property[v]) {
        this.propertyOptions = Object.keys(propertyExplain.property[v]).map(item => {
          return {
            value: item,
            label: item
          }
        })
      } else {
        this.propertyOptions = []
      }
      console.log(this.propertyOptions)
    }
  },
  computed: {
    proExplain() {
      if (this.currentProperty) {
        return this.propertyExplain.property[this.currentExplain][this.currentProperty].explain
      } else {
        return ''
      }
    },
    protyType() {
      if (this.currentProperty) {
        return this.propertyExplain.property[this.currentExplain][this.currentProperty].type
      } else {
        return ''
      }
    },
  },
  created() {
    this.explainOptions = Object.keys(propertyExplain.components).map(item => {
      return {
        value: item,
        label: item
      }
    })
  },
  methods: {
    changeExplainOptions(v) {
      this.currentExplain = v[v.length - 1]
    },
    changePropertyOptions(v) {
      this.currentProperty = v[v.length - 1]
    }
  }
}