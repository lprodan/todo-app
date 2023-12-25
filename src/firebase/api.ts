import { db } from "./config.ts";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  CollectionReference,
  writeBatch,
  query,
  where,
  orderBy,
  QueryConstraint,
} from "firebase/firestore";
import { FirestoreError, QuerySnapshot } from "@firebase/firestore";
import { ITodoItem } from "../types/todo-item.ts";
import { IFirestoreTodoItem } from "../types/firestore-todo-item.ts";

let collectionRef: CollectionReference;

export function setUserId(uid: string) {
  collectionRef = collection(db, `todos/${uid}/docs`);
}

// export async function all() {
//     return getDocs(collectionRef).then((todos) => {
//         return processData(todos)
//     })
// }

export function remove(id: string) {
  return deleteDoc(doc(collectionRef, id));
}

export function clear(ids: string[]) {
  const batch = writeBatch(db);

  for (const id of ids) {
    batch.delete(doc(collectionRef, id));
  }

  return batch.commit();
}

export function create(value: string) {
  return addDoc(collectionRef, {
    value,
    checked: false,
    createdAt: serverTimestamp(),
  });
}

export function update(id: string, item: Partial<ITodoItem>) {
  const docRef = doc(collectionRef, id);
  return updateDoc(docRef, {
    ...item,
    updatedAt: serverTimestamp(),
  });
}

function processData(data: QuerySnapshot<IFirestoreTodoItem>) {
  return data.docs.map((doc) => {
    const data = doc.data();

    const fullDate = data.createdAt
      ? new Date(data.createdAt.seconds * 1e3)
      : new Date();
    const year = fullDate.getFullYear();
    const month = (fullDate.getMonth() + 1).toString().padStart(2, "0");
    const day = fullDate.getDate().toString().padStart(2, "0");

    return {
      ...data,
      id: doc.id,
      date: `${year}-${month}-${day}`,
    } as ITodoItem;
  });
}

export function onUpdate(
  filter: boolean | undefined,
  next?: (data: ITodoItem[]) => void,
  error?: (error: FirestoreError) => void
) {
  const queryArr: QueryConstraint[] = [];
  if (filter !== undefined) {
    queryArr.push(where("checked", "==", filter));
  } else {
    queryArr.push(orderBy("checked"));
  }

  const q = query(collectionRef, ...queryArr);
  return onSnapshot(q, {
    next: (todos) => {
      if (next) {
        const data = processData(todos as QuerySnapshot<IFirestoreTodoItem>);
        next(data);
      }
    },
    error,
  });
}
