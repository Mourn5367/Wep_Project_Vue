<template>
  
  <router-view/>

    <!-- <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
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
  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <v-data-table :headers="headers"> </v-data-table>
  <v-app>
    <v-container>
      <v-bottom-navigation grow>
        <v-btn value="recent">
          <v-icon>mdi-home</v-icon>

          <span>Home</span>
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-magnify</v-icon>

          <span>Search</span>
        </v-btn>

        <v-btn value="nearby">
          <v-icon>mdi-account-key</v-icon>

          <span>Login/out</span>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </v-app> -->
</template>

<script>
  import axios from "axios";
  export default 
  {
    data: () => 
    ({
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
    }),

    methods: 
    {
      onClick ()
      {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    
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
        }
  }}
</script>