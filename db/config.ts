import { defineDb, defineTable, column } from 'astro:db';

const MyWork = defineTable({
  columns: {
    url: column.text(),
    type: column.text(),
    title: column.text(),
    headline: column.text(),
    date: column.text(),
    thumbnail: column.text(),
    tldr: column.text(),
    priority: column.number(),
    body: column.json()
  }
})


export default defineDb({
  tables: {
    MyWork
  }
});
