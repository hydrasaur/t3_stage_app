import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

interface IChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: object;
  image: object;
  tags: string[];
  partype: string;
  stats: object;
}

export const championsRoute = router({
  getChampions: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        tags: z.array(z.string()),
      })
    )
    .query(async ({ ctx }) => {
      // fetch champions
      // filter based on input
      const res = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json`
      );
      const json = await res.json();

      const arr = Object.keys(json).map(function (key, index) {
        if (index === 3) {
          return Object.entries(json[key]).map((c) => {
            return {
              c,
            };
          });
        }
      }) as Array<IChampion>;

      console.log(arr);

      return [];
    }),
});
