<template>
    <div>
        <h1>Data from Json file</h1>
        <v-data-table
            :headers="headers"
            :items="employees"
            :items-per-page="5"
            class="elevation-1"
            @click:row="selectRow"
            multi-sort="true"
        ></v-data-table>
        <v-snackbar v-model="snackbar"
            >You have selected {{ selectedEmployee.name }}, {{ selectedEmployee.title }}
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>

    </div>
</template>
<script>
import EmployeesData from '../data/employees.json'
export default {
    data() {
        return {
            selectedEmployee: {
                name: '',
                title: ''
            },
            snackbar:false,
            headers: [
                {
                    text: 'Employee ID',
                    value: 'id'
                },
                {
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: 'Position Title',
                    value: 'title'
                },
                {
                    text: 'Salary',
                    value: 'salary'
                }
            ],
            employees: EmployeesData
        }
    },
    methods: {
        selectRow(e) {
            this.snackbar=true
            this.selectedEmployee.name = e.name
            this.selectedEmployee.title = e.title
        }
    }
}
</script>
<style></style>