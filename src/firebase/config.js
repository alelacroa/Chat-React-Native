import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYYPcAMZTaRGJxEU6XCg9lUPjAellbgBQ",
  databaseURL: "https://mychat-bd313.firebaseio.com/",
  projectId: "mychat-bd313",
  appId: "1:1070235055767:android:dd231af2a450719bbbdbd2",
};

export default Firebase.initializeApp(firebaseConfig);