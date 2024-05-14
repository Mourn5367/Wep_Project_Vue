<template>



    <div>
      <v-responsive
        class="mx-auto"
        max-width="400"
      >
      <v-text-field label = "아이템명 입력" clearable variant="solo-filled"
       v-model="inputdata" @click:append-inner ="search">
          <!-- <v-btn v-on:click="search"  variant="tonal">검색</v-btn> -->
    
      </v-text-field>
    </v-responsive>
    </div>
    
         
    
      <v-data-table :headers="headers"> </v-data-table>
    
    </template>
    
    <script>
      import axios from "axios";
      export default {
        data: () => ({
          headers: [
            {
              title: '아이콘',
              align: 'center',
              key: 'icon',
            },          
            {
              title: '아이템 이름',
              align: 'center',
              key: 'itemname',
            }
          ],
          inputdata : "",
          methods: {
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
            .catch((error) =>{
              console.log(error)
            })
    
        }
      }
        }),
      }
    </script>
    