<template>
  <el-autocomplete
    v-model="state4"
    :fetch-suggestions="querySearchAsync"
    placeholder="搜索...."
    @select="handleSelect"
    prefix-icon="el-icon-search"
  ></el-autocomplete>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      restaurants: [],
      state4: '',
      timeout: null
    }
  },
  methods: {
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>
