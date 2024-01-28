import firebase_app from "../clientApp";
import addData from "../firestore/addData";

import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    if (result = true) {
        let uid = firebase.auth().currentUser.uid

        firstPage = addData();

        data = {
            albums : [],
            connections:[]
        }

        addData('users', uid, data)
    }

    return { result, error };
}
