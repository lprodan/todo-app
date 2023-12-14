import {db} from "../firebase.ts";
import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    onSnapshot
} from 'firebase/firestore'
import {ListItem} from "../ListComponent/ListComponent.tsx";
import {FirestoreError, QuerySnapshot} from "@firebase/firestore";

interface Item extends ListItem {
    value: string
    checked: boolean
    date: string
}

let collectionRef = collection(db, 'todos');

export function setUserId(uid: string) {
    collectionRef = collection(db, `todos:${uid}`);
}

export async function all() {
    return getDocs(collectionRef).then((todos) => {
        return processData(todos)
    })
}

export function remove(id: string) {
    return deleteDoc(doc(collectionRef, id))
}

export function clear(ids: string[]): any {
    return Promise.resolve()
}

export function create(value: string): any {
    return addDoc(collectionRef, {
        value,
        checked: false,
        createdAt: serverTimestamp()
    })
}

export function update(id: string, item: Partial<Item>) {
    const docRef = doc(collectionRef, id)
    return updateDoc(docRef, {
        ...item,
        updatedAt: serverTimestamp()
    })
}

function processData(data: QuerySnapshot) {
    return data.docs.map((doc: any) => {
        const data = doc.data()
        const fullDate = (data.createdAt) ? new Date(data.createdAt.seconds * 1e3) : new Date()
        const year = fullDate.getFullYear()
        const month = (fullDate.getMonth() + 1).toString().padStart(2, '0')
        const day = fullDate.getDate().toString().padStart(2, '0')

        return {
            ...data, id: doc.id, date: `${year}-${month}-${day}`
        }
    })
}

export function onUpdate(next?: (data: any) => void, error?: (error: FirestoreError) => void) {
    return onSnapshot(collectionRef, {
        next: (todos) => {
            if (next) {
                const data = processData(todos)
                next(data)
            }
        }, error
    })
}