export function addDiary (id, data) {
  return {
    type: 'ADD_Diary',
    id: id,
    data: data
  }
}
