import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex laboriosam incidunt quo consequuntur quibusdam nisi sit officia dignissimos nulla illum quaerat, maiores corrupti a veritatis quisquam rerum harum consectetur!'
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!'
        }
      ]
    }
  }
})
