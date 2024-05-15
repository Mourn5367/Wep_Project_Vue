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
          @click:append-inner="searchId"
          clearable
        ></v-text-field>
      </v-card-text>
    </v-card>
    <v-data-table
      v-model="selected"
      :items="trueItems"
      item-value="name"     
    > 
    <template v-slot:item="{ item }">
    <tr>
      <td><img :src="item['아이템 아이콘']" :alt="item['아이템 이름']" width="65" height="65"></td>
      <td>{{ item['아이템 이름'] }}</td>
      <td>{{ item['평균가'].toLocaleString() }}</td>
      <td>{{ item['최저가'].toLocaleString() }}</td>
    </tr>
  </template>
</v-data-table>
  </template>
  
  <script>
   import axios from "axios";
    export default {
      data() {
        return {
            inputdata : [],
            api_key : "yOvnV8S9LBzTVGvmEqSs4LnFIo9IluHT",
            itemRows : [],
            itemIds : [],
            trueItems : [],
            itemNames : [],
          selected: [],
          items: [
            // {
            //     itemNames
            // },
            // {
            //     itemId
            // }
          ],
        }
      },
      methods :{
      searchId()
          {
            this.itemIds.length = 0;
            this.trueItems.length = 0;
            var url = `/api/df/items?itemName=${this.inputdata}}&wordType=full&limit=100&apikey=${this.api_key}`;
              axios
              .get(url)
              .then((response) => {
                console.log(response.data)
                this.itemRows = response.data["rows"]               
                // console.log(this.itemRows)
                this.itemIds = this.itemRows.map(itemRows => itemRows.itemId)           
                // console.log(this.itemIds)
                // this.itemNames = this.itemRows.map(itemRows => itemRows.itemName)
                // console.log(this.itemNames)
                // this.items = this.itemRows.map(itemRows =>
                // ({  "아이템 이름": itemRows.itemName,
                //     "아이템 아이디" : `https://img-api.neople.co.kr/df/items/${itemRows.itemId}`
                // }))
                // console.log(this.items)
                this.seachHistory()

              })
              .catch((error) =>
              {
                console.log(error)
              })
          },
          seachHistory()
          {
            this.itemIds.forEach(history =>
            {
                //const url  = `/api/df/auction-sold?itemId=${history}&wordType=match&limit=1&apikey=${this.api_key}`;
                const url = `/api/df/auction?itemId=${history}&wordType=<wordType>&wordShort=<wordShort>&sort=unitPrice:asc&limit=1&apikey=${this.api_key}`
                axios
                .get(url)
                .then((response) =>
            {
                const rows = response.data["rows"];
                // console.log("이거 밑이 찾는 데이터")
                // console.log(rows[0]["itemId"])
                if (rows[0]["itemId"] != null)
                {
                    rows.forEach(rows => this.trueItems.push({"아이템 아이콘" : `https://img-api.neople.co.kr/df/items/${rows.itemId}`,
                    "아이템 이름": rows.itemName,
                    "평균가" : rows.averagePrice,                    
                    "최저가" : rows.unitPrice,
                    }))
                }
            }
            )
            .catch((error) =>
              {
                console.log(error)
              })
              console.log(this.trueItems)
            })
          }
        }
}
   
  </script>
  