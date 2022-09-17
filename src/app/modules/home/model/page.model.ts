export interface Page<M> {
  size: number
  content: M []
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number


  sort: {sorted: true, unsorted: false, empty: false}
  totalElements: number
  totalPages: number
//    todo: add other fielfs
}
