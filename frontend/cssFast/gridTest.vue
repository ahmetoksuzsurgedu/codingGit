<template>
  <div>
    <h3>Grid</h3>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container pa-0>
          <v-row no-gutters>
            <v-col sm="6" offset-sm="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Column
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters justify="space-between">
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Column1
              </v-card>
            </v-col>
<!--             <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Column2
              </v-card>
            </v-col> -->
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                Column3
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
  .container {
    border: 1px solid greenyellow;
  }
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  }
</style>