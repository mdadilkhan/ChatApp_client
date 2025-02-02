import { jwtDecode } from "jwt-decode";


const checkTokenExpiration=(token)=>{
     const decoded = jwtDecode(token);

     console.log(decoded);
     
}

checkTokenExpiration("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWU5MzljY2ZlMzczMTU0NTY0MjU2YSIsImVtYWlsIjoibWRhZGlsYWtodGFyOEBnbWFpbC5jb20iLCJpYXQiOjE3Mzg0ODg5NzAsImV4cCI6MTczODU3NTM3MH0.oA9e2CoDjVseYrT2ezl5wbZWok5vXKoJZcfIOyLQobY")