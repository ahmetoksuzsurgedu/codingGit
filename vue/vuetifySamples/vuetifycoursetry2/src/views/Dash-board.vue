<template>
    <div>
        <h1>Dashboard</h1>
        <!-- <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        @click:row="selectRow"
        ></v-data-table> -->
        <SalesGraph v-for="sale in sales" :key="`${sale.title}`" :sale="sale"/>
        <StatisticCard v-for="statistic in statistics" :key="`${statistic.title}`" :statistic="statistic"/>
        <EmployeesTable :employees="employees" @select-employee="setemployee"/>
        <EventTimeline :timeline="timeline"/>
        <v-snackbar v-model="snackbar">
        You have selected :   {{ selectedEmployee.name /* currentItem */ }} , 
        {{ selectedEmployee.title }}
          <v-btn color="pink" text @click="snackbar = false" v-bind="attrs">
              Close
          </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import EmployeesTable from '@/components/EmployeesTable.vue'
import EventTimeline from '@/components/EventTimeline.vue'
import SalesGraph from '@/components/SalesGraph.vue'
import StatisticCard from '@/components/StatisticCard.vue'

import employeesData from '@/data/employees.json'
import timelineData from '@/data/timeline.json'
import salesData from '@/data/sales.json'
import statisticsData from '@/data/statistics.json'

  export default {
    name: 'DashboardPage',
    components: {
      EmployeesTable,
      EventTimeline,
      SalesGraph,
      StatisticCard
    },
    data: () => ({
        selectedEmployee: {
          name: '',
          title: ''
        },
        employees: employeesData,
        sales: salesData,
        statistics: statisticsData,
        timeline: timelineData,
        snackbar: false,
        // currentItem:'',
        // headers: [
        //   {
        //     text: 'Dessert (100g serving)',
        //     align: 'start',
        //     sortable: false,
        //     value: 'name',
        //   },
        //   { text: 'Calories', value: 'calories' },
        //   { text: 'Fat (g)', value: 'fat' },
        //   { text: 'Carbs (g)', value: 'carbs' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        // ],
        // desserts: [
        //   {
        //     name: 'Frozen Yogurt',
        //     calories: 159,
        //     fat: 6.0,
        //     carbs: 24,
        //     protein: 4.0,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Ice cream sandwich',
        //     calories: 237,
        //     fat: 9.0,
        //     carbs: 37,
        //     protein: 4.3,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Eclair',
        //     calories: 262,
        //     fat: 16.0,
        //     carbs: 23,
        //     protein: 6.0,
        //     iron: '7%',
        //   },
        //   {
        //     name: 'Cupcake',
        //     calories: 305,
        //     fat: 3.7,
        //     carbs: 67,
        //     protein: 4.3,
        //     iron: '8%',
        //   },
        //   {
        //     name: 'Gingerbread',
        //     calories: 356,
        //     fat: 16.0,
        //     carbs: 49,
        //     protein: 3.9,
        //     iron: '16%',
        //   },
        //   {
        //     name: 'Jelly bean',
        //     calories: 375,
        //     fat: 0.0,
        //     carbs: 94,
        //     protein: 0.0,
        //     iron: '0%',
        //   },
        //   {
        //     name: 'Lollipop',
        //     calories: 392,
        //     fat: 0.2,
        //     carbs: 98,
        //     protein: 0,
        //     iron: '2%',
        //   },
        //   {
        //     name: 'Honeycomb',
        //     calories: 408,
        //     fat: 3.2,
        //     carbs: 87,
        //     protein: 6.5,
        //     iron: '45%',
        //   },
        //   {
        //     name: 'Donut',
        //     calories: 452,
        //     fat: 25.0,
        //     carbs: 51,
        //     protein: 4.9,
        //     iron: '22%',
        //   },
        //   {
        //     name: 'KitKat',
        //     calories: 518,
        //     fat: 26.0,
        //     carbs: 65,
        //     protein: 7,
        //     iron: '6%',
        //   },
        // ],
    }),
    methods: {
      setEmployee(event) {
        this.snackbar = true
        this.selectedEmployee.name = event.name
        this.selectedEmployee.title = event.title
      }
      // selectRow(event) {
      //   this.snackbar= true
      //   this.currentItem = event.name
      // }
    }
  }
</script>

<style></style>