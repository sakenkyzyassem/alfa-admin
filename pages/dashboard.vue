<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12 xs12>
          <v-widget title="Статистика настроения за сегодняшний день" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  ['color', [color.green.lighten1, color.lightBlue.base, color.grey.darken1, color.orange.lighten1, color.red.lighten1]],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['30%', '70%']],
                ]"
                height="500px"
                width="100%" >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <!-- mini statistic  end -->
        <v-flex sm12 xs12>
          <v-widget title="Статистика настроения на год" content-bg="white">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  ['color', [color.green.lighten1, color.lightBlue.base, color.grey.darken1, color.orange.lighten1, color.red.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                  ['series[2].type', 'bar'],
                  ['series[2].areaStyle', {}],
                  ['series[2].smooth', true],
                  ['series[3].type', 'bar'],
                  ['series[3].areaStyle', {}],
                  ['series[3].smooth', true],
                  ['series[4].type', 'bar'],
                  ['series[4].areaStyle', {}],
                  ['series[4].smooth', true],
                ]"
                height="400px"
                width="80%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>          
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import API from '@/api';
  import EChart from '@/components/chart/echart';
  import VWidget from '@/components/VWidget';
  import Material from 'vuetify/es5/util/colors';
  
  export default {
    layout: 'dashboard',
    components: {
      VWidget,
      EChart,
    },
    data: () => ({
      color: Material
    }),
    computed: {
      siteTrafficData () {
        return API.getMonthVisit;
      },
      locationData () {
        return API.getLocation;
      }
    },

  };
</script>
