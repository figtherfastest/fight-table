<template>
  <div id="app">
    <tables :tableOptions="tableOptions"></tables>
  </div>
</template>

<script>
import Tables from './components/tables'
export default {
  name: 'APP',
  components: {
    Tables,
  },
  data() {
    return {
      tableOptions: [
        [
          {
            prop: 'class',
            label: '班级',
            value: '全体'
          },
          {
            children: [
              {
                prop: 'number-1',
                label: '人数',
                value: '19'
              },
              {
                prop: 'allNumber-1',
                label: '累计人数',
                value: '19'
              },
              {
                prop: 'allRate-1',
                label: '累计上线率',
                value: '14.73%'
              },
              {
                prop: 'badNum-1',
                label: '临界生人数',
                value: '110'
              }
            ],
            prop: '22964',
            label: '一档(301.2)'
          },
          {
            children: [
              {
                prop: 'number-2',
                label: '人数',
                value: '26'
              },
              {
                prop: 'allNumber-2',
                label: '累计人数',
                value: '45'
              },
              {
                prop: 'allRate-2',
                label: '累计上线率',
                value: '34.88%'
              },
              {
                prop: 'badNum-2',
                label: '临界生人数',
                value: '84'
              }
            ],
            prop: '22965',
            label: '二档(289.7)'
          },
          {
            children: [
              {
                prop: 'number-3',
                label: '人数',
                value: '33'
              },
              {
                prop: 'allNumber-3',
                label: '累计人数',
                value: '78'
              },
              {
                prop: 'allRate-3',
                label: '累计上线率',
                value: '60.47%'
              },
              {
                prop: 'badNum-3',
                label: '临界生人数',
                value: '51'
              }
            ],
            prop: '22966',
            label: '三档(280)'
          }
        ]
      ]
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
