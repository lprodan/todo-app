import { Timestamp } from "firebase/firestore"

export interface IFirestoreTodoItem {
  id: string
  checked: boolean
  value: string
  createdAt: Timestamp
  updatedAt?: Timestamp
}
