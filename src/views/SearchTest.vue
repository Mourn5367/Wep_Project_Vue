<template>
        <v-card
      class="mx-auto"
      color="surface-light"
      max-width="400"
    >
      <v-card-text>
        <v-text-field
          v-model="inputdata"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="아이템명 입력"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="search"
          clearable
        ></v-text-field>
      </v-card-text>
    </v-card>
    <v-data-table
      v-model="selected"
      :items="items"
      item-value="name"
      show-select
    ></v-data-table>
  </template>
  
  <script>
   import axios from "axios";
    export default {
      data() {
        return {
          selected: [],
          items: [
            {
              name: '🍎 Apple',
              location: 'Washington',
              height: '0.1',
              base: '0.07',
              volume: '0.0001',
            },
            {
              name: '🍌 Banana',
              location: 'Ecuador',
              height: '0.2',
              base: '0.05',
              volume: '0.0002',
            },
            {
              name: '🍇 Grapes',
              location: 'Italy',
              height: '0.02',
              base: '0.02',
              volume: '0.00001',
            },
            {
              name: '🍉 Watermelon',
              location: 'China',
              height: '0.4',
              base: '0.3',
              volume: '0.03',
            },
            {
              name: '🍍 Pineapple',
              location: 'Thailand',
              height: '0.3',
              base: '0.2',
              volume: '0.005',
            },
            {
              name: '🍒 Cherries',
              location: 'Turkey',
              height: '0.02',
              base: '0.02',
              volume: '0.00001',
            },
            {
              name: '🥭 Mango',
              location: 'India',
              height: '0.15',
              base: '0.1',
              volume: '0.0005',
            },
            {
              name: '🍓 Strawberry',
              location: 'USA',
              height: '0.03',
              base: '0.03',
              volume: '0.00002',
            },
            {
              name: '🍑 Peach',
              location: 'China',
              height: '0.09',
              base: '0.08',
              volume: '0.0004',
            },
            {
              name: '🥝 Kiwi',
              location: 'New Zealand',
              height: '0.05',
              base: '0.05',
              volume: '0.0001',
            },
          ],
        }
      },
      methods :{
      search()
          {
              var url = `/api/df/items?itemName=${this.inputdata}}&wordType=full&limit=100&apikey=yOvnV8S9LBzTVGvmEqSs4LnFIo9IluHT`;
              axios
              .get(url)
              .then((response) => {
                console.log(response.data)
                this.itemDatas = response.data["rows"]
                this.itemNames = this.itemDatas.map( item => item.itemName)
              })
              .catch((error) =>
              {
                console.log(error)
              })
          },
        }
}
   
  </script>
  