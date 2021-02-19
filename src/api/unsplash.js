import axios from 'axios';


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID Til-KGT42LkGcuQ3TRZ1wzqI37zG0nuQsPq2y0fsRys",
    }
})