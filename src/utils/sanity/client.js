import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "9sxblz82",
    dataset: "production",
    useCdn: true, 
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    //Lager et token, på sanity/manage 
    token: "skSjm9bApDY5HnVknIQBdcRXLvKIueruBWpbs5HKPxhPGkZmyaiUW1jmQua6jXcOirp59XevbXvyk8MMgMYNEvLTRzuRIOYhs5f0AxKYOmh2Pe14E4e0TpcnTj7o0aNqeHh5qA1NUIpydbQXdpNLGsSZHxK53DyRSMbFZ6EukRg0UTC6ilAH",
    projectId: "9sxblz82",
    dataset: "production"
})