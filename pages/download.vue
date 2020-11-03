<template>
  <div>
    <div v-for="episode in anime_list[0].episodes" :key="episode.url">
      <a :href="episode.url">
        {{ episode.title }}
      </a>
    </div>
    <!-- <a v-for="data in anime_list[0]['episodes']" :key='data' :href="Object.values(data)[0]">
     <p v-for="episode in Object.keys(data)" :key="episode"> {{episode}} </p>
 </a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      anime_list: [
        {
          title: "jujutsu kaisen",
          numberOfEpisodes: 4,
          image:
            "http://takanimelist.live/wp-content/uploads/2020/10/Jujutsu-Kaisen-TV.jpg",
          episodes: [
            {
              url:
                "http://us4.alserver.art/Anime/2020/Fall/Jujutsu%20Kaisen/480p/Jujutsu%20Kaisen%20-%2001%20%5B480p%5D%20%5BAnimDL.ir%5D.mkv",
              title: "episode 1",
            },
            {
              url:
                "http://us4.alserver.art/Anime/2020/Fall/Jujutsu%20Kaisen/480p/Jujutsu%20Kaisen%20-%2002%20%5B480p%5D%20%5BAnimDL.ir%5D.mkv",
              title: " episode 2",
            },
            {
              url:
                "http://us4.alserver.art/Anime/2020/Fall/Jujutsu%20Kaisen/480p/Jujutsu%20Kaisen%20-%2003%20%5B480p%5D%20%5BAnimDL.ir%5D.mkv",
              title: "episode 3",
            },
            {
              url:
                "http://us4.alserver.art/Anime/2020/Fall/Jujutsu%20Kaisen/480p/Jujutsu%20Kaisen%20-%2004%20%5B480p%5D%20%5BAnimDL.ir%5D.mkv",
              title: "episode 4",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 40px;
  background-color: grey;
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
}

.foot {
  width: 80vw;
  height: 10vh;
  background: crimson;
}

/* p {
  font-size: 10px;
} */
</style>