import * as dotenv from 'dotenv'

dotenv.config({path: '.env'})

if(!process.env.DATABASE_URL) {
    console.log("Database url not found")
}

export default {
   schema: "./lib/supabase/schema.ts" ,
   out: './migrations',
   driver: 'pg',
   dbCredentials: {
        connectionString: process.env.DATABASE_URL || ''
   }
}