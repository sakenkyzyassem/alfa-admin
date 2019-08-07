<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <h4>
        <i class="fa fa-smile-o"></i>
        Здесь вы можете посмотреть статистику причин на выбранный вами департамент и настроение.</h4>
      <br/>
      <div id="page-selects">
        <v-layout row wrap>
          <v-flex xs12>
            <v-widget title="Выберите данные">
              <div slot="widget-content">
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex lg2 xs6>
                      <v-subheader>Депратамент</v-subheader>
                    </v-flex>
                    <v-flex lg4 xs6>
                      <v-select
                        :items="department"
                        v-model="e1"
                        label="Выберите"
                        item-text="department"
                        item-value="department"
                        single-line
                      ></v-select>
                    </v-flex>
                    <v-flex lg2 xs6>
                      <v-subheader>Настроение</v-subheader>
                    </v-flex>
                    <v-flex lg4 xs6>
                      <v-select
                        :items="mood"
                        v-model="e2"
                        label="Выберите"
                        item-text="mood"
                        item-value="abbr"
                        prepend-icon="sentiment_satisfied_alt"
                      ></v-select>
                    </v-flex>
                    <v-btn 
                      round 
                      block 
                      color="blue darken-3" 
                      dark 
                      large 
                      @click="directToBank(department.department, mood.mood)"
                    >
                      CONTINUE
                    </v-btn>
                  </v-layout>
                </v-container>
              </div>
            </v-widget>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
import Mood from '@/api/mood';
import Departments from '@/api/department';
import AppToolbar from '@/components/AppToolbar';
import AppDrawer from '@/components/AppDrawer';
import AppFab from '@/components/AppFab';

  export default {
    layout: "dashboard2",
    components: {
      VWidget,
      AppDrawer,
      AppToolbar,
      AppFab
    },
    data() {
      return {
        mood: Mood,
        department: Departments
      }
    },
    methods: {
      directToBank() {
        console.log("selected", this.department.department, this.mood.mood)
      }
    }
  }
</script>

<style scoped>

</style>
