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
  },
  actions: {
    addNote(newNoteContent) {
      let currentNew = new Date().getTime()
      let id = currentNew.toString()

      let note = {
        id,
        content: newNoteContent
      }

      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent(state) {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content
      }
    },
    totalNotesCount(state) {
      return state.notes.length
    },
    totalCharactersCount(state) {
      return state.notes.reduce((total, note) => (total += note.content.length), 0)
    }
  }
})
