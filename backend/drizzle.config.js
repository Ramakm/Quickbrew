import * as dotenv from 'dotenv'

dotenv.config({path: '.env'})

if(!process.env.DATABASE_URL) {
    console.log("Database url not found")
}

export default {
   schema: "./lib/supabase/schema.js" ,
   out: './migrations',
   dialect: 'postgresql',
   dbCredentials: {
        url: process.env.DATABASE_URL || ''
   }
}